// Footer.jsx
// Purpose: Website ko professional closing dena
// Mobile-first, clean & scalable footer

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 px-5 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        {/* Mobile: 1 column | Desktop: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Cyclonix<span className="text-teal-400">it</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Cyclonixit is a software development agency delivering modern,
              scalable web and mobile solutions for startups and businesses
              worldwide.
            </p>
          </div>

          {/* SERVICES */}
{/* SERVICES */}
<div>
  <h4 className="text-lg font-semibold text-white mb-4">
    Services
  </h4>
  <ul className="space-y-2 text-sm">
    <li>
      <a href="#contact" className="hover:text-teal-400">
        Web Development
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-teal-400">
        Mobile App Development
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-teal-400">
        UI / UX Design
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-teal-400">
        AI Integration
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-teal-400">
        SaaS Development
      </a>
    </li>
  </ul>
</div>

{/* COMPANY */}
<div>
  <h4 className="text-lg font-semibold text-white mb-4">
    Company
  </h4>
  <ul className="space-y-2 text-sm">
    <li>
      <a href="#about" className="hover:text-teal-400">
        About Us
      </a>
    </li>
    <li>
      <a href="#whychoose" className="hover:text-teal-400">
        Why Choose Us
      </a>
    </li>
    <li>
      <a href="#internship" className="hover:text-teal-400">
        Internships
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-teal-400">
        Contact
      </a>
    </li>
  </ul>
</div>



          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📧 contact@cyclonixit.com</li>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>🌍 India (Remote)</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} Cyclonixit. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
