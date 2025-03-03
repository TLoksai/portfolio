import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md w-full md:px-10 relative">
      <h1 className="text-xl md:text-2xl font-bold text-[#004D40] ml-4 md:ml-10">LOKSAI</h1>
      
      <div className="flex items-center space-x-4 md:hidden">
        <button
          className="text-[#004D40] text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <button className="bg-[#00796B] text-white px-4 py-2 rounded-md hover:bg-[#004D40]">LET'S TALK</button>
      </div>
      
      <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:items-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700 text-sm md:text-base text-center md:text-left p-4 md:p-0">
          <li><a href="#" className="hover:text-[#004D40]">Home</a></li>
          <li><a href="#" className="hover:text-[#004D40]">About Us</a></li>
          <li><a href="#" className="hover:text-[#004D40]">Projects</a></li>
          <li><a href="#" className="hover:text-[#004D40]">Skills</a></li>
          <li><a href="#" className="hover:text-[#004D40]">Portfolio</a></li>
        </ul>
      </nav>
      
      <a href="/contact">
  <button className="hidden md:block bg-[#00796B] text-white px-4 py-2 rounded-md hover:bg-[#004D40]">
    LET'S TALK
  </button>
</a>

    </header>
  );
};

export default Header;