"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function About() {

const sectionRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {

gsap.from(sectionRef.current,{
opacity:0,
y:60,
duration:1
})

},[])

return (

<div ref={sectionRef}>

{/* HERO SECTION */}

<section className="relative h-[60vh] flex items-center justify-center">

<img
src="https://picsum.photos/1600/900"
className="absolute w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center">

<h1 className="text-white text-4xl md:text-6xl font-bold">
About Our Company
</h1>

</div>

</section>

{/* ABOUT CONTENT */}

<section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

<img
src="https://picsum.photos/600/500"
className="rounded-xl shadow"
/>

<div>

<h2 className="text-3xl font-bold mb-6">
Who We Are
</h2>

<p className="text-gray-600 mb-4">
We are a modern IT company focused on building high-performance
websites, mobile applications, and digital solutions for businesses.
</p>

<p className="text-gray-600">
Our team of designers, developers, and strategists work together
to deliver innovative technology solutions that help businesses
grow online.
</p>

</div>

</section>

{/* MISSION & VISION */}

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4">

<div className="p-8 bg-white rounded-xl shadow">

<h3 className="text-2xl font-bold mb-4">
Our Mission
</h3>

<p className="text-gray-600">
To empower businesses with innovative digital solutions
that drive growth and improve customer experience.
</p>

</div>

<div className="p-8 bg-white rounded-xl shadow">

<h3 className="text-2xl font-bold mb-4">
Our Vision
</h3>

<p className="text-gray-600">
To become a global technology partner delivering
high-quality software and digital transformation services.
</p>

</div>

</div>

</section>

{/* COMPANY STATS */}

<section className="py-20">

<h2 className="text-center text-4xl font-bold mb-12">
Our Achievements
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

<div>
<h3 className="text-4xl font-bold text-blue-600">
120+
</h3>
<p className="text-gray-600">
Projects Completed
</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">
80+
</h3>
<p className="text-gray-600">
Happy Clients
</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">
10+
</h3>
<p className="text-gray-600">
Years Experience
</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">
25+
</h3>
<p className="text-gray-600">
Team Members
</p>
</div>

</div>

</section>

</div>

)
}