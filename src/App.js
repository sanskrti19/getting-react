import React from "react";
import { createRoot } from "react-dom/client";  // ✅ Correct import

import Header from "./components/Header"; 
import Body from "./components/Body"



const FooterCard = () => {
  return (
    <div className="foot-card">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="Logo"
      />
      <h3>foodfae1910@gmail.com</h3>
      <h3>📞 918273645</h3>
      <h3>🚚 All over India deliveries</h3>
    </div>
    
    
    
  );
};

const FooterMenu = () => {
  return (
    <div className="foot-menu">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="Logo"
      />
      <h3>breakfast</h3>
      <h3>lunch</h3>
      <h3>dinner</h3>
    </div>
    
    
    
  );
};

const FooterSocials = () => {
  return (
    <div className="foot-socials">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="Logo"
      />
      <h3>facebook</h3>
      <h3>instagram</h3>
      <h3>youtube</h3>
    </div>
    
    
    
  );
};



const Footer = () => {
  return (
    <div className="footer">
      <div className="about-us">About us</div>
      <div className="contact-container">
        <FooterCard />
        <FooterMenu/>
        <FooterSocials/>
      </div>
    </div>
  );
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
