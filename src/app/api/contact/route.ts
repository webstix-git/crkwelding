import { NextRequest, NextResponse } from "next/server";

const SUPABASE_FORM_URL =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/0335af3b-685e-417b-bde6-9e5fda77a586";

async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (remoteip) formData.append("remoteip", remoteip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  });

  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      undefined;

    const valid = await verifyTurnstile(turnstileToken, ip);
    if (!valid) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
    }

    const supabaseRes = await fetch(SUPABASE_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!supabaseRes.ok) {
      return NextResponse.json({ error: "Failed to submit form" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
