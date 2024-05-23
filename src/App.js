import "./App.css";
import AboutSection from "./Components/About/AboutSection";
import ContactSection from "./Components/Contact/ContactSection";
import HeaderSection from "./Components/Header/HeaderSection";
import HelpSection from "./Components/Help/HelpSection";
import SuccessSection from "./Components/Success/SuccessSection";

function App() {
  return (
    <>
      <HeaderSection />
      <SuccessSection />
      <AboutSection />
      <HelpSection />
      <ContactSection/>
    </>
  );
}

export default App;
