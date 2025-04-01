import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/faq" element={<FaqSection />} />
            <Route path="/benefits" element={<BenefitsSection />} />
            {/* Add more routes as you develop more pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
