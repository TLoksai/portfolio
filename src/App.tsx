import React from "react";
import Header from "./pages/shared/header";
import Hero from "./pages/hero";
import Who from "./pages/who";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Footer from "./pages/shared/footer";

const App = () => {
  return (
    <div className="bg-[#F5FAFC] min-h-screen font-sans cursor-pointer">
      <Header />
      <Hero />
      <Who />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
