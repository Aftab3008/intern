import { BackgroundBoxesDemo } from "@/components/shared/BackgroundBoxes";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden gradient">
      <div className="relative w-full max-w-md z-20">{children}</div>
    </div>
  );
}
