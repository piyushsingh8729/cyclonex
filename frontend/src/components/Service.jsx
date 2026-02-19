// Services.jsx
// Purpose: Cyclonixit ke core services ko professional cards me show karna
// Mobile-first design (pehle mobile, phir desktop enhance)

const servicesData = [
  {
    title: "Web Development",
    desc: "Modern, fast, and scalable web applications using React, Node, and cloud technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    desc: "High-quality Android & iOS apps built with performance and UX in mind.",
    icon: "📱",
  },
  {
    title: "UI / UX Design",
    desc: "User-centered designs that convert visitors into customers.",
    icon: "🎨",
  },
  {
    title: "AI Integration",
    desc: "Integrate AI features like chatbots, automation, and smart analytics.",
    icon: "🤖",
  },
  {
    title: "SaaS Development",
    desc: "End-to-end SaaS product development from idea to launch.",
    icon: "🚀",
  },
  {
    title: "Other",
    desc: "Reliable support, updates, and performance monitoring for your products.",
    icon: "🛠️",
  },
];

const Services = () => {
  const handleCardClick = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section id="services"  className="py-20 bg-[#020617] text-white px-5">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            What We Offer at <span className="text-teal-400">Cyclonixit</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            We provide complete digital solutions to help businesses grow,
            scale, and succeed in today’s competitive market.
          </p>
        </div>

        {/* SERVICES GRID */}
        {/* Mobile: 1 column | Tablet: 2 | Desktop: 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
                onClick={handleCardClick}
              className="bg-[#020617]/80 border border-white/10 rounded-2xl p-6 hover:border-teal-400 transition"
            >
              {/* ICON */}
              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
