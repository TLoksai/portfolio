const Who = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#b9d5d6] via-white to-[#b9d5d6] py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
                <img
                  src="/portfolio/images/who1.png"
                  alt="About Me"
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  About <span className="text-teal-600">Me</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Passionate Full-Stack Developer crafting digital experiences that matter. With expertise in modern web technologies and a commitment to excellence, I transform ideas into impactful solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-teal-100 text-teal-800 px-4 py-3 rounded-xl font-medium text-center">
                  1+ Years Experience
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-xl font-medium text-center">
                    10+ Projects Completed
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-3 rounded-xl font-medium text-center">
                    Full-Stack Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              My Journey
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">How It Started</h3>
                <p className="text-gray-700 leading-relaxed">
                  My journey into web development began with curiosity and a passion for creating digital solutions.
                  What started as learning HTML and CSS evolved into mastering modern frameworks and building
                  scalable applications that serve real users.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe technology should solve problems and enhance lives. Every project I work on is an
                  opportunity to make a positive impact through clean, efficient, and user-centered design.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">What Drives Me</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm driven by the challenge of turning complex problems into simple, elegant solutions.
                  Whether it's optimizing performance, improving user experience, or implementing cutting-edge
                  technologies, I thrive on continuous learning and growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Development</h3>
                <p className="text-gray-600">
                  React, Next.js, TypeScript, Tailwind CSS, and modern UI/UX principles for creating
                  responsive and interactive web applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend Development</h3>
                <p className="text-gray-600">
                  Python FastAPI, Node.js, database design, and API development for robust and scalable
                  server-side solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Development</h3>
                <p className="text-gray-600">
                  React Native, Expo, and Capacitor for cross-platform mobile applications that work
                  seamlessly across iOS and Android.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">UI/UX Design</h3>
                <p className="text-gray-600">
                  Figma, design systems, and user-centered design principles to create intuitive and
                  visually appealing interfaces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">DevOps & Tools</h3>
                <p className="text-gray-600">
                  Git, CI/CD pipelines, testing frameworks, and modern development workflows for
                  efficient and reliable deployments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation & AI</h3>
                <p className="text-gray-600">
                  Web scraping, data processing, and AI integration to automate workflows and
                  enhance application capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              What I Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  Every line of code matters. I focus on writing clean, maintainable, and scalable solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  Great products are built by great teams. I believe in open communication and shared success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Technology evolves rapidly. I stay curious and committed to lifelong learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;