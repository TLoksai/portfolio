import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg leading-loose">
          I am a passionate front-end developer with experience in creating beautiful and responsive web applications.
          My goal is to craft seamless user experiences and visually stunning interfaces. I enjoy working with modern
          web development tools and staying up-to-date with the latest trends.
        </p>
      </div>
    </section>
  );
};

export default About;
