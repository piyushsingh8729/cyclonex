import { useState } from "react";

const internships = [
  "Frontend Development (React)",
  "Backend Development (Node.js)",
  "Full Stack Development",
  "UI / UX Design",
  "AI / Automation",
];

const Internship = () => {

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    year: "",
    field: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/internship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message || "Application submitted successfully!");

      setShowForm(false);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        university: "",
        degree: "",
        year: "",
        field: "",
      });

    } catch (error) {
      alert("Error submitting application");
      console.error(error);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#020617] text-white px-5">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold">
            INTERNSHIP PROGRAM
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            Internship Opportunities at{" "}
            <span className="text-teal-400">Cyclonixit</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
            We are offering internship opportunities for freshers who want to
            gain real-world experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Who Can Apply?</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✅ Freshers & college students</li>
              <li>✅ Basic programming knowledge</li>
              <li>✅ Passion to learn & grow</li>
              <li>✅ Ready to work on real projects</li>
            </ul>

            <h2 className="text-2xl font-semibold pt-4">
              Available Domains
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              {internships.map((item, index) => (
                <li key={index}>🚀 {item}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT APPLY CARD (UNCHANGED UI) */}
          <div className="bg-[#020617]/80 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Apply for Internship
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Fill out the application form and our team will contact you if
              your profile matches our requirements.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition font-semibold shadow-lg"
            >
              Apply Now
            </button>

            <p className="mt-4 text-xs text-gray-400 text-center">
              * Internship is skill-based. Certificate provided on completion.
            </p>
          </div>

        </div>
      </div>

      {/* ================= MODAL FORM ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50">
          <div className="bg-[#020617] w-full max-w-lg rounded-2xl p-6 relative">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✖
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center">
              Internship Application Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              />

              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="University Name"
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              />

              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              >
                <option value="">Select Degree</option>
                <option>BCA</option>
                <option>BSc</option>
                <option>BTech</option>
              </select>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>Final Year</option>
              </select>

              <select
                name="field"
                value={formData.field}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white"
                required
              >
                <option value="">Select Internship Field</option>
                {internships.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition font-semibold"
              >
                Submit Application
              </button>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internship;
