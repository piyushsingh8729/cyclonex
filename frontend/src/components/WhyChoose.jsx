// WhyChoose.jsx
// Purpose: Client ke mind me trust build karna
// Mobile-first layout, clean and professional

const points = [
  {
    title: "Client-Focused Approach",
    desc: "We understand your business goals and deliver solutions tailored to your needs.",
    icon: "🎯",
  },
  {
    title: "Modern Tech Stack",
    desc: "We use latest frameworks and tools to ensure performance, security, and scalability.",
    icon: "⚙️",
  },
  {
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects on time without compromising quality.",
    icon: "⏱️",
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates, clear pricing, and honest discussions throughout the project.",
    icon: "💬",
  },
];

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const WhyChoose = () => {
  return (
    <section  id="whychoose" className="py-20 bg-[#020617] text-white px-5">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Why Choose <span className="text-teal-400">Cyclonixit</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            We are not just developers — we are your technology partners.
          </p>
        </div>

        {/* STATS (Mobile-first grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#020617]/80 border border-white/10 rounded-xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-teal-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* POINTS GRID */}
        {/* Mobile: 1 | Tablet: 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 bg-[#020617]/80 border border-white/10 rounded-2xl p-6"
            >
              {/* ICON */}
              <div className="text-3xl">
                {point.icon}
              </div>

              {/* CONTENT */}
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {point.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
