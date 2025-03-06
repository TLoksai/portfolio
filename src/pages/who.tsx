const Who = () => {
  return (
    <section className="w-full">
      {/* First Section - Who Am I */}
      <div className="bg-gradient-to-b from-[#b9d5d6] to-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-12 md:py-16 min-h-[70vh]">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/images/who1.png"
            alt="Profile"
            className="w-72 md:w-96 lg:w-[30rem] rounded-full"
          />
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
            I craft modern, high-performing web experiences, bringing ideas to
            life with clean, efficient code. My journey includes working with
            various technologies to build scalable and user-friendly applications.
          </p>

          <h3 className="text-lg font-semibold text-[#00796B] mt-4">
            💻 I Can Develop Anything You Need
          </h3>
          <p className="text-gray-700 mt-2">
            From intuitive UI designs to dynamic web applications, I specialize
            in creating seamless digital solutions using React, Tailwind, and more.
          </p>

          <h3 className="text-lg font-semibold text-[#00796B] mt-4">
            🌍 Keeping Up with Digital Trends
          </h3>
          <p className="text-gray-700 mt-2">
            I stay ahead of the curve by adapting to the latest technologies,
            ensuring every project is future-proof, efficient, and visually stunning.
          </p>
        </div>
      </div>

      {/* Separator to Visually Divide Sections */}
      <div className="w-full h-12 bg-white"></div>

      {/* Second Section - More About My Work */}
      <div className="bg-gradient-to-b from-white to-[#b9d5d6] px-6 md:px-20 lg:px-40 py-12 md:py-16 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          More About My Work
        </h2>

        {/* Experience Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-[#00796B] flex items-center">
            🏆 My Experience
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            I have experience in front-end development and have worked with
            multiple frameworks, ensuring fast and responsive user interfaces.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-semibold text-[#00796B] flex items-center">
            🔗 Technologies I Use
          </h3>
          <ul className="text-gray-700 mt-2 list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
            <li><span className="font-medium text-gray-900">React, Next.js, TypeScript</span></li>
            <li><span className="font-medium text-gray-900">Tailwind CSS, Material UI</span></li>
            <li><span className="font-medium text-gray-900">Node.js, NestJS</span></li>
            <li><span className="font-medium text-gray-900">MongoDB, Firebase</span></li>
            <li><span className="font-medium text-gray-900">Git, GitHub, CI/CD</span></li>
          </ul>
        </div>

        {/* Work Philosophy Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#00796B] flex items-center">
            💡 My Work Philosophy
          </h3>
          <p className="text-gray-700 mt-2 leading-relaxed">
            I believe in writing <span className="font-medium text-gray-900">clean, maintainable code</span>, 
            collaborating effectively with teams, and always learning to improve my skills.
          </p>
        </div>
      </div>

      {/* Third Section - Contact */}
      <div className="bg-gradient-to-b from-[#b9d5d6] to-white px-6 md:px-20 lg:px-40 py-12 md:py-16 min-h-[70vh]">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
          Get In Touch
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 z-10">
            <h3 className="text-lg text-[#00796B] font-semibold">Contact</h3>
            <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Name:" className="w-full p-3 border rounded-md" />
              <input type="email" placeholder="Email:" className="w-full p-3 border rounded-md" />
              <textarea placeholder="Write Message:" className="w-full p-3 border rounded-md h-32"></textarea>
              <button className="bg-[#138086] text-white px-6 py-3 rounded-md hover:bg-[#0F6B6B] w-full">
                CONTACT US
              </button>
            </form>
          </div>

          {/* Contact Image */}
          <div className="hidden md:block md:w-1/2 h-full absolute top-0 right-0 flex justify-end">
            <img 
              src="/images/contact1.png" 
              alt="Contact" 
              className="w-[110%] h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;