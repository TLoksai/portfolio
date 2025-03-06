import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? "text-[#138086]" : "text-white"
        }`}>
          LOKSAI
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`text-2xl md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? "text-[#138086]" : "text-white"
          }`}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center">
          <ul className={`flex space-x-6 text-sm md:text-base transition-colors duration-300 ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}>
            <li><Link to="/" className="hover:text-[#138086]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#138086]">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-[#138086]">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-[#138086]">Skills</Link></li>
          
          </ul>
        </nav>

        {/* Contact Button */}
        <Link to="/contact">
          <button className={`hidden md:block px-4 py-2 rounded-md transition-all duration-300 ${
            isScrolled ? "bg-[#138086] text-white hover:bg-[#0F6B6B]" : "bg-white text-[#138086] hover:bg-gray-200"
          }`}>
            LET'S TALK
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
