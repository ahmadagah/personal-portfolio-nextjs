"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border-button";

export function MovingBorderButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Hire Me
      </Button>
    </div>
  );
}
