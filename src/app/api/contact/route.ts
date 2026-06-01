import { NextRequest, NextResponse } from "next/server";

const SUPABASE_FORM_URL =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/0335af3b-685e-417b-bde6-9e5fda77a586";

type TurnstileVerifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

async function verifyTurnstile(token: string): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    return { ok: false, reason: "Server captcha secret is not configured." };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", token);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const data = (await res.json()) as TurnstileVerifyResponse;
    if (data.success) return { ok: true };

    const codes = data["error-codes"]?.join(", ") ?? "unknown";
    return { ok: false, reason: codes };
  } catch {
    return { ok: false, reason: "Could not reach captcha verification service." };
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { turnstileToken, ...form } = body as {
    turnstileToken?: string;
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    message?: string;
  };

  if (!turnstileToken) {
    return NextResponse.json({ error: "Captcha required" }, { status: 400 });
  }

  const verification = await verifyTurnstile(turnstileToken);
  if (!verification.ok) {
    return NextResponse.json(
      { error: "Captcha verification failed", detail: verification.reason },
      { status: 403 }
    );
  }

  try {
    const supabaseRes = await fetch(SUPABASE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!supabaseRes.ok) {
      const detail = process.env.NODE_ENV === "development" ? await supabaseRes.text() : undefined;
      return NextResponse.json(
        { error: "Failed to submit form", detail },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? error.message
        : "Server error";
    console.error("[api/contact]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
