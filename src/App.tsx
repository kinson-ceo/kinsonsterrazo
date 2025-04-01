import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
// import BenefitsSection from "./components/BenefitsSection";
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
            <Route path="/kinsonsterrazo" element={<Home />} />
            <Route path="/kinsonsterrazo/about" element={<About />} />
            <Route path="/kinsonsterrazo/contact" element={<ContactSection />} />
            <Route path="/kinsonsterrazo/services" element={<ServicesSection />} />
            <Route path="/kinsonsterrazo/projects" element={<ProjectsSection />} />
            <Route path="/kinsonsterrazo/testimonials" element={<TestimonialsSection />} />
            <Route path="/kinsonsterrazo/faq" element={<FaqSection />} />
            {/* <Route path="/kinsonsterrazo/benefits" element={<BenefitsSection />} /> */}
            {/* Add more routes as you develop more pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
