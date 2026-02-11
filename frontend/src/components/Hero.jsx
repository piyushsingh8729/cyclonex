const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 bg-gradient-to-br from-[#020617] via-[#0f3d3e] to-[#0f766e] text-white px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* CONTENT */}
        <div className="text-center md:text-left">

          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs sm:text-sm font-semibold">
            🚀 Software Development Agency
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            We Build Digital <br />
            Products That <br />
            <span className="text-teal-400">Scale Your Business</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Cyclonixit designs and develops scalable web & mobile applications
            to help startups and enterprises grow faster with modern
            technologies.
          </p>

          {/* BUTTONS */}
          <div href="#contact" className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <a href="#contact">
              <button className="w-full sm:w-auto px-7 py-3 rounded-full bg-teal-500 hover:bg-teal-600 transition font-semibold shadow-lg">
              Get a Free Quote
            </button>
           </a>
           <a href="#services">
              <button  className="w-full sm:w-auto px-7 py-3 rounded-full border border-teal-400 hover:bg-teal-400 hover:text-black transition font-semibold">
              View Services
            </button>
           </a>
          </div>
        </div>

        {/* RIGHT CARD (HIDE ON MOBILE) */}
        <div className="hidden md:flex justify-center relative">
          <div className="w-[380px] h-[380px] rounded-full bg-teal-500/20 blur-3xl absolute"></div>

          <div className="relative bg-[#020617]/80 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">What We Do</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>✔ Web Application Development</li>
              <li>✔ Mobile App Development</li>
              <li>✔ UI/UX Design</li>
              <li>✔ AI Integration</li>
              <li>✔ SaaS Products</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
