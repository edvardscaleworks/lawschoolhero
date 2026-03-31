import { Resend } from "resend";

let _client: Resend | null = null;

export function getResend(): Resend {
  if (!_client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }
    _client = new Resend(process.env.RESEND_API_KEY);
  }
  return _client;
}
