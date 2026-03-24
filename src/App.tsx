import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "animate.css";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import WhatsAppIcon from "./components/whatsapp";
import About from "./pages/about";




const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
                  </Routes>
       <WhatsAppIcon/>
        <Footer/> 
      </div>
    
    </Router>
  );
};

export default App;
