import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "+917680872629"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsApp;
