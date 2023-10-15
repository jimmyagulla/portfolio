"use client"

import Link from "next/link"

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ModeToggle } from "@/components/mode-toggle"
import { BurgerMenu } from "@/components/burger-menu"

export function Header() {
  return (
    <header className="bg-background sticky top-1 border-b z-40">
      <div className="container flex items-center justify-between py-2">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}