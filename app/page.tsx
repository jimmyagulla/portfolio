import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <main className="container bg-background min-h-[3000px]">
      <section className="flex flex-col gap-2 py-12">
        <h1>NextJS website template.</h1>
        <h2 className="max-w-[586px]">
          Easily customizable NextJS website. Reusable components. Shadcn. Tailwindcss.
        </h2>
      </section>
    </main>
  )
}
