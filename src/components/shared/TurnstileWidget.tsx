"use client";

import dynamic from "next/dynamic";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";

const Turnstile = dynamic(
  () => import("@marsidev/react-turnstile").then((mod) => mod.Turnstile),
  { ssr: false, loading: () => <div className="min-h-[65px]" aria-hidden /> }
);

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
};

const TurnstileWidget = ({ onVerify, onExpire, onError }: TurnstileWidgetProps) => {
  if (!TURNSTILE_SITE_KEY) {
    return (
      <p className="text-destructive text-xs font-roboto">
        Security check is not configured. Please contact the site owner.
      </p>
    );
  }

  return (
    <Turnstile
      siteKey={TURNSTILE_SITE_KEY}
      options={{ theme: "auto", size: "normal" }}
      onSuccess={onVerify}
      onExpire={onExpire}
      onError={onError}
      className="min-h-[65px]"
    />
  );
};

export default TurnstileWidget;
