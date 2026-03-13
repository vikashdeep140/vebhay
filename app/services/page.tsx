"use client"

export default function Services() {

const services = [
{
title: "Web Development",
desc: "Modern responsive websites built with latest technologies."
},
{
title: "Mobile App Development",
desc: "Android and iOS mobile applications for your business."
},
{
title: "UI / UX Design",
desc: "User focused design to improve engagement."
},
{
title: "Ecommerce Development",
desc: "Complete online store development solutions."
},
{
title: "SEO Optimization",
desc: "Improve your search ranking and online visibility."
},
{
title: "Cloud Solutions",
desc: "Scalable cloud infrastructure for modern businesses."
}
]

return (

<div>

{/* HERO */}

<section className="relative h-[50vh] flex items-center justify-center">

<img
src="https://picsum.photos/1600/900"
className="absolute w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center">

<h1 className="text-white text-4xl md:text-6xl font-bold">
Our Services
</h1>

</div>

</section>

{/* SERVICES GRID */}

<section className="py-20">

<h2 className="text-center text-4xl font-bold mb-16">
What We Offer
</h2>

<div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">

{services.map((service,i)=>(

<div
key={i}
className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
>

<img
src={`https://picsum.photos/500/300?random=${i}`}
className="w-full h-48 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-semibold mb-3">
{service.title}
</h3>

<p className="text-gray-600">
{service.desc}
</p>

</div>

</div>

))}

</div>

</section>

{/* OUR PROCESS */}

<section className="py-20 bg-gray-100">

<h2 className="text-center text-4xl font-bold mb-16">
Our Process
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center px-4">

<div>
<h3 className="text-xl font-bold mb-2">1. Planning</h3>
<p className="text-gray-600">
Understanding client requirements and goals.
</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">2. Design</h3>
<p className="text-gray-600">
Creating modern UI and UX prototypes.
</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">3. Development</h3>
<p className="text-gray-600">
Building scalable and secure applications.
</p>
</div>

<div>
<h3 className="text-xl font-bold mb-2">4. Launch</h3>
<p className="text-gray-600">
Testing and deploying the final product.
</p>
</div>

</div>

</section>

{/* CTA */}

<section className="py-20 text-center bg-black text-white">

<h2 className="text-4xl font-bold mb-6">
Ready to Start Your Project?
</h2>

<p className="mb-8">
Let's build something amazing together.
</p>

<a
href="/contact"
className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700"
>
Contact Us
</a>

</section>

</div>

)
}