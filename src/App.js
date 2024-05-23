import React from "react";
import "./App.css";
import AboutSection from "./Components/About/AboutSection";
import ContactSection from "./Components/Contact/ContactSection";
import HeaderSection from "./Components/Header/HeaderSection";
import HelpSection from "./Components/Help/HelpSection";
import SuccessSection from "./Components/Success/SuccessSection";

function App() {
  return (
    <React.Fragment>
      <HeaderSection />
      <SuccessSection />
      <AboutSection />
      <HelpSection />
      <ContactSection />
    </React.Fragment>
  );
}

export default App;
