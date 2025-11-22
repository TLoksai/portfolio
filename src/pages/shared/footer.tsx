import { Linkedin, Instagram, FileText } from "lucide-react"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t border-gray-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-start text-left gap-10">

        {/* Branding Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold text-[#004D40]">LOKSAI</h2>
          <p className="mt-2 text-gray-600">
            I'm a frontend developer currently working on projects and building modern UI experiences using React, Tailwind, and more.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-[#00796B]">Contact</h3>
          <ul className="mt-3 space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+91 7680872629</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📧</span>
              <span>loksai2024@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📍</span>
              <span>Bangalore, Karnataka, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-[#00796B]">Connect With Me</h3>
          <div className="flex flex-col mt-4 space-y-3 relative z-10">
            <a
              href="https://www.linkedin.com/in/tammineniloksai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-[#0077B5] transition duration-300"
            >
              <Linkedin size={24} color="#0077B5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/loksai2002_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-[#E4405F] transition duration-300"
            >
              <Instagram size={24} color="#E4405F" />
              <span>Instagram</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-[#FF5722] transition duration-300"
            >
              <FileText size={24} color="#FF5722" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-4 text-center text-white bg-[#0F4C5C] py-4 relative z-10">
        <p className="text-sm">© 2025 Code & Creativity by LOKSAI</p>
      </div>
    </footer>
  );
};

export default Footer;
