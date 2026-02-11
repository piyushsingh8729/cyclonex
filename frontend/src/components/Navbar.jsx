import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll helper
  const goToSection = (id) => {
    setOpen(false);

    // Agar already home page pe ho
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      el && el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Pehle home page jao, phir scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el && el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-white">
          Cyclonix<span className="text-teal-400">it</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li onClick={() => goToSection("home")} className="cursor-pointer hover:text-teal-400">Home</li>
          <li onClick={() => goToSection("services")} className="cursor-pointer hover:text-teal-400">Services</li>
          <li onClick={() => goToSection("whychoose")} className="cursor-pointer hover:text-teal-400">Why Choose Us</li>
          <li><Link to="/internship" className="hover:text-teal-400">Internship</Link></li>
          <li onClick={() => goToSection("contact")} className="cursor-pointer hover:text-teal-400">Contact</li>
        </ul>

        {/* CTA */}
        <button
          onClick={() => goToSection("contact")}
          className="hidden md:block px-6 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold"
        >
          Get a Quote
        </button>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-white">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#020617] px-5 pb-6">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li onClick={() => goToSection("home")}>Home</li>
            <li onClick={() => goToSection("services")}>Services</li>
            <li onClick={() => goToSection("whychoose")}>Why Choose Us</li>
            <Link to="/internship" onClick={() => setOpen(false)}>Internship</Link>
            <li onClick={() => goToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
