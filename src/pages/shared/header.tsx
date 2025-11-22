import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white/95 backdrop-blur-sm shadow-lg w-full md:px-10 relative">
      <a href="/">
        <h1 className="text-xl md:text-2xl font-bold text-teal-600 ml-4 md:ml-10 cursor-pointer">LOKSAI</h1>
      </a>
      
      <div className="flex items-center space-x-4 md:hidden">
        <button
          className="text-teal-600 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <a href="/contact" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300 inline-block ml-auto">LET'S TALK</a>
      </div>
      
      <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-sm md:text-base text-center md:text-left p-4 md:p-0">
          <li><a href="/" className="hover:text-teal-600 transition-colors duration-300">Home</a></li>
          <li><a href="/about" className="hover:text-teal-600 transition-colors duration-300">About</a></li>
          <li><a href="/projects" className="hover:text-teal-600 transition-colors duration-300">Projects</a></li>
          <li><a href="/skills" className="hover:text-teal-600 transition-colors duration-300">Skills</a></li>
          <li><a href="/contact" className="hover:text-teal-600 transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
      
      <a href="/contact">
  <button className="hidden md:block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg">
    LET'S TALK
  </button>
</a>

    </header>
  );
};

export default Header;