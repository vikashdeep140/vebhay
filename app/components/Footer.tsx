import Link from "next/link"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {

return (

<footer className="bg-gray-900 text-gray-300">

<div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">


{/* COMPANY INFO */}

<div>

{/* LOGO */}

<Link href="/" className="inline-block mb-4">

<img
src="/logos/website_logo.png"
alt="Logo"
className="h-16 w-auto"
/>

</Link>

<p className="text-gray-400 mb-6">
We build modern websites, mobile applications, and digital solutions
to help businesses grow online.
</p>


{/* SOCIAL ICONS */}

<div className="flex gap-4 text-lg">

<a
href="https://facebook.com"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition"
>
<FaFacebookF />
</a>

<a
href="https://twitter.com"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition"
>
<FaTwitter />
</a>

<a
href="https://linkedin.com"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition"
>
<FaLinkedinIn />
</a>

<a
href="https://instagram.com"
target="_blank"
rel="noopener noreferrer"
className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
>
<FaInstagram />
</a>

</div>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="text-white font-semibold mb-4">
Quick Links
</h3>

<ul className="space-y-2">

<li>
<Link href="/" className="hover:text-white transition">
Home
</Link>
</li>

<li>
<Link href="/about" className="hover:text-white transition">
About Us
</Link>
</li>

<li>
<Link href="/services" className="hover:text-white transition">
Services
</Link>
</li>

<li>
<Link href="/contact" className="hover:text-white transition">
Contact Us
</Link>
</li>

</ul>

</div>


{/* SERVICES */}

<div>

<h3 className="text-white font-semibold mb-4">
Our Services
</h3>

<ul className="space-y-2">

<li>
<Link href="/services" className="hover:text-white transition">
Web Development
</Link>
</li>

<li>
<Link href="/services" className="hover:text-white transition">
Mobile App Development
</Link>
</li>

<li>
<Link href="/services" className="hover:text-white transition">
UI / UX Design
</Link>
</li>

<li>
<Link href="/services" className="hover:text-white transition">
SEO Optimization
</Link>
</li>

</ul>

</div>


{/* CONTACT INFO */}

<div>

<h3 className="text-white font-semibold mb-4">
Contact Info
</h3>

<p className="mb-2">
📍 Delhi, India
</p>

<p className="mb-2">
📞 <a href="tel:+919876543210" className="hover:text-white">
+91 9876543210
</a>
</p>

<p className="mb-2">
✉ <a href="mailto:info@itcompany.com" className="hover:text-white">
info@itcompany.com
</a>
</p>

<p>
📍 <a
href="https://maps.google.com/?q=Delhi"
target="_blank"
rel="noopener noreferrer"
className="hover:text-white"
>
View on Map
</a>
</p>

</div>

</div>


{/* COPYRIGHT */}

<div className="border-t border-gray-800 py-6 text-center text-gray-500">

© {new Date().getFullYear()} IT Company. All Rights Reserved.

</div>

</footer>

)

}