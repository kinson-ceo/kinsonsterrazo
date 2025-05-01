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
import ServiceDetail from "./pages/services/ServiceDetail";
import ProjectDetail from "./pages/projects/ProjectDetail";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/faq" element={<FaqSection />} />

            {/* Also add routes without the / prefix for local development */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/faq" element={<FaqSection />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}
