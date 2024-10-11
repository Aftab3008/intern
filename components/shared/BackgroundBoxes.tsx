"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";

export function BackgroundBoxesDemo() {
  return (
    <div className="fixed inset-0 w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)]" />
      <Boxes />
    </div>
  );
}
