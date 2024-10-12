"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../LogoutButton";

export default function MobileSheet({ userId }: { userId: string }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>
              <div className="flex h-14 items-center border-b">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
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
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <SheetClose key={item.name} asChild>
                    <Link
                      href={item.href.replace("{userId}", userId)}
                      key={item.name}
                      className={cn(
                        pathname == item.href.replace("{userId}", userId)
                          ? "bg-muted text-primary"
                          : "text-muted-foreground bg-none",
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70 text-xl"
                      )}
                    >
                      <item.icon className="size-6" />
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </div>
        <SheetFooter className="w-full">
          <SheetClose asChild>
            <LogoutButton />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
