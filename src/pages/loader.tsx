import { motion } from "framer-motion";
import { FaReact, FaCode, FaLaptopCode, FaPaintBrush, FaRobot, FaBrain } from "react-icons/fa";
import { SiTensorflow, SiOpenai } from "react-icons/si";

const Loader = () => {
  const letters = "LOKSAI".split("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Background icons animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaReact className="absolute top-10 left-10 text-[#138086] text-4xl animate-spin-slow" />
        <FaCode className="absolute bottom-10 right-10 text-[#42999E] text-4xl animate-bounce" />
        <FaLaptopCode className="absolute bottom-20 left-20 text-[#E63946] text-3xl animate-pulse" />
        <FaPaintBrush className="absolute top-20 right-20 text-[#F4A261] text-3xl animate-bounce" />
        <FaRobot className="absolute bottom-10 left-10 text-[#6A0572] text-4xl animate-spin" />
        <SiOpenai className="absolute top-10 right-10 text-[#0A9396] text-4xl animate-pulse" />
        <SiTensorflow className="absolute top-20 left-32 text-[#FF6F00] text-4xl animate-bounce" />
        <FaBrain className="absolute bottom-20 right-32 text-[#8338EC] text-3xl animate-spin-slow" />
      </motion.div>

      {/* Main loader animation */}
      <div className="flex text-6xl font-bold">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#138086] to-[#42999E] brightness-125"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;