"use client";

import { User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UpdateSchema } from "@/lib/zodSchema";
import { Button, buttonVariants } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2, TriangleAlert } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { updateUser } from "@/utils/actions/useractions";
import { useRouter } from "next/navigation";

export default function UpdateForm({ user }: { user: User }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof UpdateSchema>>({
    resolver: zodResolver(UpdateSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      imageUrl: user.imageUrl,
    },
  });
  const { setValue } = form;

  async function onSubmit(values: z.infer<typeof UpdateSchema>) {
    setPending(true);
    try {
      let fileUrl = null;
      if (file) {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const uniqueFileName = `${uuidv4()}-${file.name}`;
        const { data, error } = await supabase.storage
          .from("images")
          .upload(uniqueFileName, file);

        if (error) {
          throw new Error("Error uploading image");
        }
        fileUrl = data.fullPath;
      }
      const response = await updateUser({
        id: user.id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        imageUrl: fileUrl || user.imageUrl,
      });
      if (response.error) {
        setError(response.error);
      }
      if (response.success) {
        router.push("/");
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setValue("imageUrl", URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Card className="flex flex-col h-full w-full">
      <CardHeader></CardHeader>
      <CardContent className="flex-grow overflow-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 h-full flex flex-col"
          >
            {!!error && (
              <div className="mb-6 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                <TriangleAlert className="size-4" />
                <p>{error}</p>
              </div>
            )}
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-center gap-4">
                  <FormControl>
                    <img
                      src={field.value}
                      alt="Selected Profile"
                      className=" w-32 h-32 object-cover rounded-full border border-gray-300 shadow-sm"
                    />
                  </FormControl>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-primary file:text-white
                     hover:file:bg-primary-dark
                     cursor-pointer"
                    />
                  </label>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full text-sm py-4"
              disabled={pending}
            >
              {pending || form.formState.isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
