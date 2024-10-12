"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig, Loader2, Ticket, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { SignUpSchema } from "@/lib/zodSchema";
import Link from "next/link";
import { signup } from "@/utils/actions/actions";
import Image from "next/image";

export const SignUpCard = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    setPending(true);
    try {
      const newUser = await signup(values);
      if (newUser) {
        setSuccess("Verification email sent.");
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="w-full max-w-md p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="flex flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <p>Sign up to continue</p>
        </CardTitle>
        <CardDescription>Use your email service to continue</CardDescription>
      </CardHeader>
      {!!error && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      {!!success && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-green-400/25 p-3 text-sm text-green-400">
          <CircleCheckBig className="size-4" />
          <p>{success}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="First name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Last name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                    <Input type="password" {...field} placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Confirm Password"
                      className="mb-5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full text-sm py-4"
              disabled={form.formState.isSubmitting || pending}
            >
              {pending || form.formState.isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
        </Form>
        <Separator />
        <p className="text-xs text-muted-foreground flex justify-center items-center">
          Already have an account?
          <Link
            href="/auth/signin"
            className="cursor-pointer text-sky-700 hover:underline ml-0.5"
          >
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
