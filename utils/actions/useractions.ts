"use server";

import { revalidatePath } from "next/cache";
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

export async function updateUser({
  id,
  firstName,
  lastName,
  email,
  imageUrl,
}: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
}) {
  try {
    const fileUrl = process.env.SUPABASE_IMAGE_URL! + "/" + imageUrl;
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        email,
        imageUrl: fileUrl,
      },
    });
    revalidatePath("/", "layout");
    return {
      success: "Updated successfully",
      user,
    };
  } catch (error) {
    return { error: "Failed to update" };
  }
}
