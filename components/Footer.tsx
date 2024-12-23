"use client";

import React from "react";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} AHMAD. All rights reserved.
        </p>

        {/* Social Links Section */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link
            isExternal
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
            href={siteConfig.links.twitter}
          >
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link
            isExternal
            aria-label="Discord"
            className="text-gray-400 hover:text-white"
            href={siteConfig.links.discord}
          >
            <DiscordIcon className="w-6 h-6" />
          </Link>
          <Link
            isExternal
            aria-label="Github"
            className="text-gray-400 hover:text-white"
            href={siteConfig.links.github}
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
