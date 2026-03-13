"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Hero(){

const textRef = useRef(null)

useEffect(()=>{

gsap.from(textRef.current,{
y:80,
opacity:0,
duration:1.2
})

},[])

return(

<section className="relative h-screen overflow-hidden">

<video
autoPlay
loop
muted
playsInline
className="absolute w-full h-full object-cover"
>

<source src="/videos/banner-video.mp4" type="video/mp4" />

</video>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">

<div ref={textRef} className="text-white px-4">

<h1 className="text-4xl md:text-6xl font-bold mb-6">
Digital Innovation Agency
</h1>

<p className="text-lg md:text-xl">
We build websites, apps and brands
</p>

</div>

</div>

</section>

)
}