import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/shared/header";
import Footer from "./pages/shared/footer";
import Hero from "./pages/hero";
import About from "./pages/about";
import Who from "./pages/who";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Skills1 from "./pages/skills1";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import CTA from "./pages/cta";
import Projects1 from "./pages/projects1";
import WhatsApp from "./pages/whatsapp";
import Loader from "./pages/loader";

const Home = () => (
  <>
    <Header />
    <Hero />
    <Skills />
    <Services />
    <Projects />
    <Testimonials />
    <CTA />
    <Footer />
  </>
);

const AboutUs = () => (
  <>
    <Header />
    <Who />
    <Footer />
  </>
);

const SkillsPage = () => (
  <>
    <Header />
    <Skills1 />
    <Contact />
    <Footer />
  </>
);

const ProjectsPage = () => (
  <>
    <Header />
    <Projects1 />
    <Contact />
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Header />
    <Contact />
    <Footer />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Show loader only on initial site load, not on route changes
    if (!hasLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoaded(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // No loader for route changes
      setLoading(false);
    }
  }, [hasLoaded]);

  return (
    <div className="bg-white min-h-screen font-sans cursor-pointer">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* ✅ WhatsApp Button (Visible on all pages) */}
        <WhatsApp />
      </>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
