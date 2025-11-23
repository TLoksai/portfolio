import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer committed to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated Full-Stack Developer with expertise in modern web technologies.
              My approach combines technical proficiency with creative problem-solving to deliver
              scalable, user-centric applications that drive real business value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I specialize
              in React, Node.js, and cloud technologies. I believe in writing clean, maintainable
              code and staying current with industry best practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When not coding, I enjoy exploring emerging technologies, contributing to open-source
              projects, and sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">2+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/portfolio/images/sai.jpg"
              alt="Tammineni Loksai"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
