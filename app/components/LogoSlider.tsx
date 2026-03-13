"use client"

import { useEffect, useRef } from "react"

export default function LogoCarousel() {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {

    let x = 0

    const interval = setInterval(() => {

      if (ref.current) {
        x += 1
        ref.current.scrollLeft = x
      }

    }, 20)

    return () => clearInterval(interval)

  }, [])

  const logos = [
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
    "/logos/google.png",
  ]

  return (

    <section className="py-20 bg-gray-100">

      <h2 className="text-center text-4xl mb-12">
        Trusted By
      </h2>

      <div
        ref={ref}
        className="flex gap-16 overflow-x-hidden max-w-7xl mx-auto"
      >

        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            className="opacity-70 h-12"
            alt="logo"
          />
        ))}

      </div>

    </section>
  )
}