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
      throw new Error("User does not exists");
    }
    const userData = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!userData) {
      throw new Error("User not found");
    }
    return userData;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
