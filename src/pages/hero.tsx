
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-[#b9d5d6] to-white py-16 px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-teal-600">Tammineni Loksai</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                Full-Stack & Mobile Developer
              </h2>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I create exceptional digital experiences through clean code and innovative solutions.
              Specializing in modern web technologies, scalable applications, and cross-platform mobile development.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300 shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600/10 rounded-full transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-full shadow-2xl">
                <img
                  src="/portfolio/images/loksai.png"
                  alt="Tammineni Loksai"
                  className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
