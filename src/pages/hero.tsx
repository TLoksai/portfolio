
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-12 md:py-16 bg-gradient-to-b from-[#b9d5d6] to-white min-h-[70vh]">

      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Hello, I'm <span className="text-[#00796B]">Tammineni Loksai</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold text-[#004D40] mt-2">
          Frontend Developer
        </h2>
        <p className="text-gray-700 mt-4">
        I design and build interactive, user-centric web experiences.
With modern technologies, I craft seamless and responsive interfaces.
Bringing creativity and functionality together for stunning applications.
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-[#00796B] text-white px-6 py-3 rounded-md hover:bg-[#004D40]">
            Learn More
          </button>
          <button className="bg-white border border-[#00796B] text-[#00796B] px-6 py-3 rounded-md hover:bg-[#00796B] hover:text-white">
            Contact Me
          </button>
        </div>
      </div>

      {/* Full-Width Background Image */}
      <div className="mt-6 md:mt-0 flex justify-center w-full md:w-auto">
        <img
          src="/images/5.png"
          alt="Profile"
          className="w-full max-w-[450px] md:max-w-[500px] lg:max-w-[600px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
