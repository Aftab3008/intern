import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.verifyOtp({
        type,
        token_hash,
      });

      if (!error) {
        redirect(next);
      } else {
        console.error("Email verification failed:", error);
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  } else {
    console.error("Missing token_hash or type in query parameters.");
  }

  redirect("/signin");
}
