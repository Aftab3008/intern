"use client";

import { logout } from "@/utils/actions/actions";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button
      className="w-full flex items-center justify-center"
      onClick={() => {
        logout();
      }}
    >
      <LogOut className="size-6 rotate-180 mr-4" />
      <span className="hidden sm:inline">Logout</span>
    </Button>
  );
}
