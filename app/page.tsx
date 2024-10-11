"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/utils/actions/actions";

export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
