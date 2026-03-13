export default function Services(){

const services=[
"Web Development",
"Mobile Apps",
"UI UX Design",
"SEO"
]

return(

<section className="py-24 bg-gradient-to-b from-gray-900 to-black">

<h2 className="text-center text-4xl text-white mb-16">
Our Services
</h2>

<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4">

{services.map((s,i)=>(
<div
key={i}
className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-white hover:scale-105 transition"
>

<img
src={`https://picsum.photos/400/250?random=${i}`}
className="rounded-lg mb-4"
/>

<h3 className="text-xl font-semibold">
{s}
</h3>

</div>
))}

</div>

</section>

)
}