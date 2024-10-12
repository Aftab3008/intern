"use server";

import prisma from "../db";
import { createClient } from "../supabase/server";

export async function getCurrentUser() {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return null;
    }
    const userData = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!userData) {
      return null;
    }
    return userData;
  } catch (error) {
    return null;
  }
}
