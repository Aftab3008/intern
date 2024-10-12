"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import prisma from "../db";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error.code);
    if (error.code === "email_not_confirmed") {
      const { error: resendError } = await supabase.auth.resend({
        type: "signup",
        email,
      });
      if (resendError) {
        return {
          error: {
            message: "Failed to resend confirmation email",
          },
        };
      }
      return {
        error: {
          message: "Email not confirmed. Please check your email",
        },
      };
    } else if (error.code === "invalid_credentials") {
      return {
        error: {
          message: "Invalid email or password",
        },
      };
    } else {
      return {
        error: {
          message: "Something went wrong",
        },
      };
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup({
  email,
  password,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const supabase = createClient();

  const { data: user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) {
    console.log(error);
    return;
  }

  if (user) {
    const emailFromUser = user.user?.email;

    const getUser = await prisma.user.findUnique({
      where: {
        email: emailFromUser as string,
      },
    });

    if (getUser) {
      return {
        error: {
          message: "User already exists",
        },
      };
    }

    const newUser = await prisma.user.create({
      data: {
        id: user.user?.id!,
        email: user.user?.user_metadata.email as string,
        firstName,
        lastName,
        imageUrl: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`,
      },
    });
    if (newUser) {
      return {
        success: "Verification email sent",
        data: {
          user: newUser,
        },
      };
    } else {
      return {
        error: {
          message: "Something went wrong",
        },
      };
    }
  }
}

export async function logout() {
  const supabase = createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/auth/signin");
}
