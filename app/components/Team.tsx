"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Team(){

const sectionRef = useRef(null)

useEffect(()=>{

gsap.from(sectionRef.current,{
opacity:0,
y:80,
duration:1
})

},[])

const team = [
{ name:"John Smith", role:"CEO"},
{ name:"Sarah Johnson", role:"UI UX Designer"},
{ name:"Michael Lee", role:"Full Stack Developer"},
{ name:"Emma Brown", role:"Marketing Head"}
]

return(

<section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">

<h2 className="text-center text-4xl text-white mb-16">
Our Team
</h2>

<div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">

{team.map((member,i)=>(
<div
key={i}
className="group backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center text-white hover:scale-105 transition"
>

<img
src={`https://i.pravatar.cc/300?img=${i+5}`}
className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white/20"
/>

<h3 className="text-xl font-semibold">
{member.name}
</h3>

<p className="text-gray-300 mb-4">
{member.role}
</p>

<div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition">

<a href="#" className="hover:text-blue-400">LinkedIn</a>
<a href="#" className="hover:text-blue-400">Twitter</a>

</div>

</div>
))}

</div>

</section>

)
}