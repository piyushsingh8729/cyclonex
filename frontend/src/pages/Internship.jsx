import React, { useState, useEffect } from "react";

// Why Join Us Points
const whyJoinUsPoints = [
  { title: "Hands-on Projects", desc: "Engage with real business challenges and build impactful solutions.", icon: "🛠️" },
  { title: "Expert Mentors", desc: "Guidance from seasoned professionals with industry experience.", icon: "🎓" },
  { title: "Certified Completion", desc: "Earn a recognized certificate validating your skills.", icon: "📜" },
  { title: "Flexible Schedule", desc: "Balance work and learning with remote and onsite options.", icon: "⏰" },
  { title: "Career Boost", desc: "High performers get referral and placement opportunities.", icon: "🚀" },
];

// Available Internships
const availableInternships = [
  { title: "Full-stack Web Dev", tags: ["Remote", "Part-time"], desc: "Master front-end and back-end skills for versatile development." },
  { title: "Android App Development", tags: ["Remote", "Part-time"], desc: "Build native Android apps with real-world guidance." },
  { title: "Cybersecurity", tags: ["Remote", "Part-time"], desc: "Understand and prevent modern cyber threats." },
  { title: "Data Science", tags: ["Remote", "Part-time"], desc: "Analyze data to uncover insights that drive decisions." },
  { title: "Machine Learning", tags: ["Remote", "Part-time"], desc: "Create intelligent models solving practical problems." },
  { title: "Cloud Computing", tags: ["Work from Home", "Part-time"], desc: "Learn cloud architectures powering modern businesses." },
  { title: "Software Development", tags: ["Remote", "Part-time"], desc: "Develop scalable and efficient software solutions." },
];

// Form Options
const degrees = ["BCA", "BSc", "BTech","Other"];
const years = ["12th","1st Year", "2nd Year", "3rd Year", "Final Year","Graduate","UG"];
const internshipFields = [
  "Frontend Development (React)",
  "Backend Development (Node.js)",
  "Full Stack Development",
  "UI / UX Design",
  "AI / Automation",
  "Other"
];

const WhyJoinAndInternships = () => {
  // Internship form state
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

  const [internsTrained, setInternsTrained] = useState(0);
  const [domains, setDomains] = useState(0);
  const [placement, setPlacement] = useState(0);

  useEffect(() => {
    const maxInterns = 1000;
    const maxDomains = 8;
    const maxPlacement = 95;

    const interval = setInterval(() => {
      setInternsTrained(prev => prev < maxInterns ? prev + 10 : maxInterns);
      setDomains(prev => prev < maxDomains ? prev + 1 : maxDomains);
      setPlacement(prev => prev < maxPlacement ? prev + 1 : maxPlacement);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://intern-production-8566.up.railway.app/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message || "Application submitted successfully!");
      setShowForm(false);
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
    <section className="w-full min-h-screen bg-[#0a121f] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto py-12">

        {/* Internship Success Rate */}
        <h2 className="text-4xl text-center py-6 font-extrabold mb-3 underline decoration-teal-400 decoration-4 underline-offset-8">
          Internship Success Rate
        </h2>
        <div className="mb-20 text-center grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-[#14222e] p-6 rounded-xl shadow-lg hover:shadow-teal-500 transition-shadow duration-300">
            <h3 className="text-4xl font-bold text-teal-400">+{internsTrained}</h3>
            <p className="text-gray-300 mt-2">Interns Trained</p>
          </div>
          <div className="bg-[#14222e] p-6 rounded-xl shadow-lg hover:shadow-teal-500 transition-shadow duration-300">
            <h3 className="text-4xl font-bold text-teal-400">+{domains}</h3>
            <p className="text-gray-300 mt-2">Internship Domains</p>
          </div>
          <div className="bg-[#14222e] p-6 rounded-xl shadow-lg hover:shadow-teal-500 transition-shadow duration-300">
            <h3 className="text-4xl font-bold text-teal-400">+{placement}%</h3>
            <p className="text-gray-300 mt-2">Placement Support</p>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold mb-3 underline decoration-teal-400 decoration-4 underline-offset-8">
            Why Join Us
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyJoinUsPoints.map(({ title, desc, icon }, i) => (
              <div key={i} className="bg-[#14222e] rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-teal-500 transition-shadow duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Internships */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-10 underline decoration-teal-400 decoration-4 underline-offset-8">
            Available Internships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableInternships.map(({ title, tags, desc }, i) => (
              <div key={i} className="bg-[#14222e] rounded-xl p-7 shadow-lg flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-teal-700/70 text-teal-200 rounded-full px-3 py-1 font-medium">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
                <button
                  className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full py-3 font-semibold shadow-md hover:brightness-110 transition"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now
                </button>
              </div>
            ))}
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
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required />
              <input type="text" name="university" value={formData.university} onChange={handleChange} placeholder="University Name" className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required />

              <select name="degree" value={formData.degree} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required>
                <option value="">Select Degree</option>
                {degrees.map((deg, idx) => <option key={idx}>{deg}</option>)}
              </select>

              <select name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required>
                <option value="">Select Year</option>
                {years.map((year, idx) => <option key={idx}>{year}</option>)}
              </select>

              <select name="field" value={formData.field} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/10 text-white" required>
                <option value="">Select Internship Field</option>
                {internshipFields.map((item, index) => <option key={index}>{item}</option>)}
              </select>

              <button type="submit" className="w-full py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition font-semibold">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyJoinAndInternships;
