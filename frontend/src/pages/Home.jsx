import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Service.jsx";
import WhyChoose from "../components/WhyChoose.jsx";


const Home = () => {
  return (
    <>
      <Hero/>
      <Services />
      <WhyChoose />
      <Contact/>
         <Footer/>
    </>
  );
};

export default Home;
