"use client";

import { login } from "@/utils/actions/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Loader2, TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SignInSchema } from "@/lib/zodSchema";
import Link from "next/link";
import Image from "next/image";

export const SignInCard = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setPending(true);
    try {
      const response = await login(values);
      if (response && response.error) {
        setError(response.error.message);
      } else {
        // Handle successful login if needed
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else if (error && typeof error === "object" && "digest" in error) {
        setError("An error occurred. Please try again later.");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="w-full max-w-md p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="flex flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <p>Log in to continue</p>
        </CardTitle>
        <CardDescription>Use your email service to continue</CardDescription>
      </CardHeader>
      {!!error && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex flex-col gap-2 mb-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-sm py-4"
              disabled={pending}
            >
              {pending || form.formState.isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
        <Separator />
        <p className="text-xs text-muted-foreground flex items-center justify-center">
          Don&apos;t have an account?
          <Link
            href="/auth/signup"
            className="cursor-pointer text-sky-700 hover:underline ml-0.5"
          >
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
