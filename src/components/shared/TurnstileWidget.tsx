"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

const TurnstileWidget = ({ onVerify, onExpire, onError }: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || !TURNSTILE_SITE_KEY || widgetIdRef.current) {
      return false;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: onVerify,
      "expired-callback": onExpire,
      "error-callback": onError,
      theme: "auto",
    });
    return true;
  }, [onVerify, onExpire, onError]);

  const tryRender = useCallback(() => {
    if (renderWidget()) return;
    // Retry once after paint if script beat the container ref
    requestAnimationFrame(() => {
      renderWidget();
    });
  }, [renderWidget]);

  useEffect(() => {
    if (scriptLoaded || window.turnstile) {
      tryRender();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, tryRender]);

  if (!TURNSTILE_SITE_KEY) {
    return (
      <p className="text-destructive text-xs font-roboto">
        Security check is not configured. Please contact the site owner.
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
          tryRender();
        }}
        onError={() => onError?.()}
      />
      <div ref={containerRef} className="min-h-[65px]" />
    </>
  );
};

export default TurnstileWidget;
