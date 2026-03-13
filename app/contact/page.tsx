"use client"

import { useState } from "react"

type FormType = {
  name: string
  email: string
  mobile: string
  subject: string
  message: string
}

export default function Contact() {

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    setLoading(true)

    try {
const res = await fetch("http://127.0.0.1:8000/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(form)
})

      const data = await res.json()

      console.log("API RESPONSE:", data)

      if (res.ok) {

        alert(data.message || "Message sent successfully")

        setForm({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: ""
        })

      } else {

        alert(data.message || "Submission failed")

      }

    } catch (error) {

      console.error("Request Error:", error)
      alert("Server error. Please check Laravel server.")

    } finally {

      setLoading(false)

    }
  }

  return (

    <div>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Send Enquiry
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-3 rounded"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border p-3 rounded"
                required
              />

              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full border p-3 rounded"
              />

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
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
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* CONTACT DETAILS */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <p className="text-gray-600">Delhi, India</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">📞 Mobile Number</h3>
                <p className="text-gray-600">+91 9876543210</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">✉ Email Address</h3>
                <p className="text-gray-600">info@itcompany.com</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow">

          <iframe
            src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>

        </div>
      </section>

    </div>
  )
}