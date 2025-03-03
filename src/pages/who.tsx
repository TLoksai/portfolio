import React from "react";

const Who = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-12 md:py-16 bg-[#E8F0F8] min-h-[70vh]">
      {/* Image Section */}
      <div className="relative w-full  md:w-1/2 flex justify-center">
        {/* Main Image */}
        <img
  src="/images/who1.png"
  alt="Profile"
  className="w-72 md:w-96 lg:w-[30rem] rounded-full"
/>

        {/* Symbol Positioned Over Image */}
        <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3">
          <img
            src="/images/symbol.png"
            alt="Symbol"
            className="w-16 md:w-20 lg:w-24"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-lg text-[#00796B] font-semibold">About Me</h3>
        <h2 className="text-3xl font-bold text-gray-900">🚀 Who Am I?</h2>
        <p className="text-gray-700 mt-4">
        I craft modern, high-performing web experiences, bringing ideas to life with clean, efficient code. My journey includes working with various technologies to build scalable and user-friendly applications.
        </p>

        <h3 className="text-lg font-semibold text-[#00796B] mt-4">
        💻 I Can Develop Anything You Need
        </h3>
        <p className="text-gray-700 mt-2">
        From intuitive UI designs to dynamic web applications, I specialize in creating seamless digital solutions using React, Tailwind, and more.
        </p>

        <h3 className="text-lg font-semibold text-[#00796B] mt-4">
        🌍 Keeping Up with Digital Trends
        </h3>
        <p className="text-gray-700 mt-2">
        I stay ahead of the curve by adapting to the latest technologies, ensuring every project is future-proof, efficient, and visually stunning.
        </p>
      </div>
    </section>
  );
};

export default Who;
