"use client"

import { useState } from "react"

export default function Contact() {

const [form, setForm] = useState({
name: "",
email: "",
mobile: "",
subject: "",
message: ""
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setForm({
...form,
[e.target.name]: e.target.value
})
}

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()

try {

const res = await fetch("/api/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(form)
})

const data = await res.json()

alert(data.message)

setForm({
name: "",
email: "",
mobile: "",
subject: "",
message: ""
})

} catch (error) {
alert("Something went wrong")
}

}

return (

<div className="bg-gray-50">

{/* HERO SECTION */}

<section className="relative h-[50vh] flex items-center justify-center">

<img
src="https://picsum.photos/1600/900"
className="absolute w-full h-full object-cover"
alt="Contact Hero"
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center">

<h1 className="text-white text-4xl md:text-6xl font-bold">
Contact Us
</h1>

</div>

</section>


{/* PAGE HEADER */}

<section className="py-16 text-center">

<div className="max-w-3xl mx-auto px-4">

<h2 className="text-3xl font-bold mb-4">
Get In Touch
</h2>

<p className="text-gray-600">
Have a project in mind? Send us a message and our team will contact you soon.
</p>

</div>

</section>


{/* CONTACT SECTION */}

<section className="pb-20">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">

{/* CONTACT FORM */}

<div className="bg-white p-8 rounded-xl shadow-lg">

<h3 className="text-2xl font-semibold mb-6">
Send Enquiry
</h3>

<form className="space-y-4" onSubmit={handleSubmit}>

<input
name="name"
value={form.name}
onChange={handleChange}
type="text"
placeholder="Your Name"
className="w-full border p-3 rounded"
required
/>

<input
name="email"
value={form.email}
onChange={handleChange}
type="email"
placeholder="Your Email"
className="w-full border p-3 rounded"
required
/>

<input
name="mobile"
value={form.mobile}
onChange={handleChange}
type="text"
placeholder="Mobile Number"
className="w-full border p-3 rounded"
/>

<input
name="subject"
value={form.subject}
onChange={handleChange}
type="text"
placeholder="Subject"
className="w-full border p-3 rounded"
/>

<textarea
name="message"
value={form.message}
onChange={handleChange}
rows={5}
placeholder="Message"
className="w-full border p-3 rounded"
required
/>

<button
type="submit"
className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
>
Send Message
</button>

</form>

</div>


{/* CONTACT DETAILS */}

<div className="space-y-6">

<div className="bg-white p-6 rounded-xl shadow">

<h4 className="text-lg font-semibold mb-2">
📍 Address
</h4>

<p className="text-gray-600">
Delhi, India
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow">

<h4 className="text-lg font-semibold mb-2">
📞 Mobile
</h4>

<p className="text-gray-600">
+91 9876543210
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow">

<h4 className="text-lg font-semibold mb-2">
✉ Email
</h4>

<p className="text-gray-600">
info@itcompany.com
</p>

</div>

</div>

</div>

</section>


{/* MAP SECTION */}

<section className="pb-20 px-4">

<div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow">

<iframe
src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[400px]"
loading="lazy"
/>

</div>

</section>

</div>

)

}