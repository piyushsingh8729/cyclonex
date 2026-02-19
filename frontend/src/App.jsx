import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";


import Home from "./pages/Home.jsx";
import Internship from "./pages/Internship.jsx";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
     
      </Routes>

   
    </BrowserRouter>
  );
}

export default App;
