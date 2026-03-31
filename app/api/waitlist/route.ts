import { createClient } from "@supabase/supabase-js";
import { getResend } from "@/lib/resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

function confirmationEmailHtml(
  firstName: string | null,
  position: number
): string {
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#000000;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#000000;">
    <tr>
      <td align="center" style="padding:48px 20px;">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
          <tr>
            <td style="padding-bottom:32px;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:400;color:#ffffff;letter-spacing:-0.01em;">lawschoolhero</span>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.10);padding-bottom:32px;"></td>
          </tr>
          <tr>
            <td style="padding-bottom:10px;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:32px;font-weight:400;color:#ffffff;line-height:1.15;">You made the right call.</h1>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.35);">You're #${position} on the waitlist.</p>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.08);padding-bottom:32px;"></td>
          </tr>
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.65);">${greeting} welcome to lawschoolhero.</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.65);">When we launch, you'll get free access to everything: LSAT logical reasoning and reading comprehension training, AI-powered personal statement coaching, resume formatting built for law school applications, and on-demand tutoring from students who scored in the 99th percentile and were admitted to T14 schools.</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.65);">We'll reach out soon. In the meantime, tell a friend — every spot on the waitlist matters.</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:40px;">
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.4);">— The lawschoolhero team</p>
            </td>
          </tr>
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.08);padding-bottom:24px;"></td>
          </tr>
          <tr>
            <td>
              <p style="margin:0;font-size:11px;line-height:1.6;color:rgba(255,255,255,0.2);text-align:center;">© 2026 lawschoolhero. You received this because you joined the waitlist at lawschoolhero.org.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendConfirmationEmail(
  email: string,
  firstName: string | null,
  position: number
) {
  return getResend().emails.send({
    from: "lawschoolhero <info@lawschoolhero.org>",
    to: email,
    subject: "You're on the list — lawschoolhero",
    html: confirmationEmailHtml(firstName, position),
  });
}

async function sendAdminNotification(
  email: string,
  firstName: string | null,
  position: number
) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  return getResend().emails.send({
    from: "lawschoolhero <info@lawschoolhero.org>",
    to: adminEmail,
    subject: `New waitlist signup: ${email}`,
    text: `New waitlist signup\n\nEmail: ${email}\nName: ${firstName ?? "(not provided)"}\nTime: ${new Date().toISOString()}\nTotal signups: ${position}`,
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const { email, firstName } = body as { email?: string; firstName?: string };

  if (!email || !EMAIL_REGEX.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const sanitizedName =
    typeof firstName === "string" ? firstName.trim().slice(0, 100) || null : null;

  const supabase = getSupabase();

  const { error: insertError } = await supabase.from("waitlist_signups").insert({
    email: normalizedEmail,
    first_name: sanitizedName,
  });

  if (insertError) {
    if (insertError.code === "23505") {
      return Response.json({ error: "already_on_waitlist" }, { status: 409 });
    }
    console.error("Waitlist insert error:", insertError);
    return Response.json({ error: "server_error" }, { status: 500 });
  }

  const { data: countData } = await supabase.rpc("get_waitlist_count");
  const position = typeof countData === "number" ? countData : 1;

  const results = await Promise.allSettled([
    sendConfirmationEmail(normalizedEmail, sanitizedName, position),
    sendAdminNotification(normalizedEmail, sanitizedName, position),
  ]);

  results.forEach((r) => {
    if (r.status === "rejected") {
      console.error("Email send failed:", r.reason);
    }
  });

  return Response.json({ success: true, position });
}
