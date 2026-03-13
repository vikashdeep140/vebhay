export default function Portfolio(){

const items = Array.from({length:6})

return(

<section className="py-24">

<h2 className="text-4xl text-center mb-16">
Portfolio
</h2>

<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-4">

{items.map((_,i)=>(
<div key={i} className="group relative overflow-hidden">

<img
src={`https://picsum.photos/600/400?random=${i}`}
className="group-hover:scale-110 transition"
/>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition">

View Project

</div>

</div>
))}

</div>

</section>

)
}