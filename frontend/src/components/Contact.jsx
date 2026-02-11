import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully 🚀");
        setForm({
          name: "",
          email: "",
          service: "Web Development",
          message: "",
        });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#020617] text-white px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-teal-400 text-sm font-semibold">
            CONTACT US
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Let’s Build Something <br />
            <span className="text-teal-400">Great Together</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-md text-base sm:text-lg">
            Have a project idea or need a reliable software partner?
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#020617]/80 border border-white/10 rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-teal-400"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-teal-400"
            />

            {/* Service */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-teal-400"
            >
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI / UX Design</option>
              <option>AI Integration</option>
              <option>SaaS Development</option>
            </select>

            {/* Message */}
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-teal-400 resize-none"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition font-semibold shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
