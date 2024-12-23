"use client";

import React from "react";
import dynamic from "next/dynamic";

import { MovingBorderButton } from "@/components/ui/MovingBorberButton";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "@/public/coding-animation.json";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section */}
      <div className="flex flex-col max-w-lg">
        <h1 className="text-4xl font-bold  dark:text-white">
          Full Stack Developer
        </h1>
        <p className="text-lg dark:text-gray-400 mt-4">
          Crafting modern websites and Web Apps to bring your ideas to life.
        </p>
        <div className="mt-6">
          <MovingBorderButton />
        </div>
      </div>

      {/* Right Section for Animation */}
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center">
          <Lottie
            animationData={animationData}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
