import { DashboardItems } from "@/components/shared/home/DashboardItems";
import MobileSheet from "@/components/shared/home/MobileSheet";
import LogoutButton from "@/components/shared/LogoutButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/utils/actions/useractions";
import { Loader2, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-primary" />
        <span className="ml-2">Loading user data...</span>
      </div>
    );
  }

  return (
    <section className="grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col justify-between">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/logo.png"
                alt="Logo"
                className="size-8"
                width={40}
                height={40}
              />
              <h3 className="text-2xl">
                Digit<span className="text-primary">X</span>
              </h3>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4 mt-4 gap-4">
              <DashboardItems />
            </nav>
          </div>

          <div className="p-4">
            <LogoutButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="md:hidden flex gap-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/logo.png"
                alt="Logo"
                className="size-10"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-x-5">
            <div className="md:hidden flex items-center justify-center">
              <MobileSheet />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Image
                    src={"/avatar.jpeg"}
                    alt="User Avatar"
                    className="rounded-full"
                    width={30}
                    height={30}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <MailIcon className="h-5 w-5 mr-2" />
                  <h2 className="text-xs text-wrap">{user?.email}</h2>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </section>
  );
}
