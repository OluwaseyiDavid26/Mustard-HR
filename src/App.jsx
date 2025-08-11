import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutUs";
import ServicesPage from "./components/WhatWeDo";
import ContactPage from "./components/ContactSection";
import PartnershipSection from "./components/PartnershipSection";
import WhatWeDo from "./components/WhatWeDo";
import AboutUS from "./components/AboutUs";
import Mission from "./components/Mission";
import CoreValues from "./components/CoreValues";
import OurTeam from "./components/OurTeam";
import Testimonial from "./components/Testimonial";
import Scroll from "./components/Scroll";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PartnershipSection />
              <WhatWeDo />
              <AboutUS />
              <Mission />
              <CoreValues />
              <OurTeam />
              <Testimonial />
              <ContactPage />
              <Scroll />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
