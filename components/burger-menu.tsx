"use client"

import { useState } from 'react'
import Link from "next/link"

import {
  HamburgerMenuIcon,
  Cross1Icon
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { MENU_TABS } from "@/constants"
import { cn } from "@/lib/utils"

export function BurgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible((prev: boolean) => !prev)
  }

  return (
    <nav>
      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        {menuVisible ? (
          <Cross1Icon onClick={toggleMenu} className="w-6 h-6 z-50" />
        ) : (
          <HamburgerMenuIcon onClick={toggleMenu} className="w-6 h-6" />
        )}
      </Button>

      {menuVisible && (
        <section className="fixed flex items-center justify-center top-0 left-0 w-full h-full backdrop-blur-md">
          <div className="absolute rounded-full bg-black/20 w-[2000px] h-[2000px] animate-menu-bg-zoom-in" />
          <div className={cn(
            "flex items-center justify-center w-full h-full pointer-events-none rounded-full z-50",
            menuVisible ? "animate-menu-nav-zoom-in" : "animate-menu-nav-zoom-out"
          )}>
            <ul className="flex flex-col items-center justify-center gap-8 list-none pointer-events-auto">
              {MENU_TABS.map((tab) => (
                <li key={tab.name}>
                  <Link
                    href={tab.href}
                    onClick={toggleMenu}
                    className="text-5xl font-bold text-foreground hover:no-underline"
                  >
                    {tab.name}
                  </Link>
                </li>
              ))} 
            </ul>
          </div>
        </section>
      )}
    </nav>
  )
}