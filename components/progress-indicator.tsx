"use client"

import { useState, useEffect } from "react"

import { NO_MOTION_PREFERENCE_QUERY } from "@/constants"

export function ProgressIndicator() {
  const [progress, setProgress] = useState(0)

  const calculateProgress = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height

    setProgress(scrolled)
  }

  useEffect(() => {
    const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY) 

    matches && window.addEventListener("scroll", calculateProgress)

    return () => window.removeEventListener("scroll", calculateProgress)
  }, [progress])

  return (
    <div className="fixed bg-background top-0 w-full h-fit blur-none z-50">
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}