"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {

const [open, setOpen] = useState(false)

return (

<nav className="fixed w-full z-50 backdrop-blur bg-black/60">

<div className="max-w-7xl mx-auto flex justify-between items-center px-4">

{/* LOGO */}

<Link href="/" className="flex items-center">

<img
src="/logos/website_logo.png"
alt="Logo"
className="h-25 w-auto py-4"
/>

</Link>


{/* DESKTOP MENU */}

<div className="hidden md:flex gap-8 text-white font-medium">

<Link href="/" className="hover:text-blue-400 transition">
Home
</Link>

<Link href="/about" className="hover:text-blue-400 transition">
About
</Link>

<Link href="/services" className="hover:text-blue-400 transition">
Services
</Link>

<Link href="/contact" className="hover:text-blue-400 transition">
Contact
</Link>
<Link href="/blog" className="hover:text-blue-400 transition">
Blog
</Link>

</div>


{/* MOBILE MENU BUTTON */}

<button
className="md:hidden text-white text-2xl"
onClick={() => setOpen(!open)}
>
☰
</button>

</div>


{/* MOBILE MENU */}

{open && (

<div className="md:hidden bg-black text-white flex flex-col gap-4 p-6">

<Link href="/" onClick={() => setOpen(false)}>
Home
</Link>

<Link href="/about" onClick={() => setOpen(false)}>
About
</Link>

<Link href="/services" onClick={() => setOpen(false)}>
Services
</Link>

<Link href="/contact" onClick={() => setOpen(false)}>
Contact
</Link>

</div>

)}

</nav>

)

}