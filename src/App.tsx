import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/shared/header";
import Footer from "./pages/shared/footer";
import Hero from "./pages/hero";
import Who from "./pages/who";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Skills1 from "./pages/skills1";
import Projects from "./pages/projects";
import Projects1 from "./pages/projects1";

const Home = () => (
  <>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
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
    <Footer />
  </>
);

// ✅ Added Projects Page
const ProjectsPage = () => (
  <>
    <Header />
    <Projects1 />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-[#F5FAFC] min-h-screen font-sans cursor-pointer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} /> {/* ✅ Fixed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
