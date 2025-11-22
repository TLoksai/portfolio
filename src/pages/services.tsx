import { FaCode, FaMobileAlt, FaServer, FaRobot } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-6xl text-teal-600" />,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using React, Next.js, Node.js, and modern databases. From responsive front-end interfaces to scalable back-end APIs, cloud deployment, and performance optimization.",
  },
  {
    icon: <FaMobileAlt className="text-6xl text-blue-600" />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications using React Native, Flutter, and Capacitor. Native performance with unified codebase across iOS and Android.",
  },
  {
    icon: <FaServer className="text-6xl text-purple-600" />,
    title: "Backend & API Development",
    description: "Designing secure, efficient backend systems with Python FastAPI, Node.js, and databases like Supabase and MongoDB.",
  },
  {
    icon: <FaRobot className="text-6xl text-green-600" />,
    title: "Automation & AI Integration",
    description: "Implementing intelligent solutions with AI, web scraping, and automation tools to streamline business processes.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What I Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technologies and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-transparent rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center">
                  <div className="p-3 bg-teal-100 rounded-xl mr-4 group-hover:bg-teal-200 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="w-12 h-1 bg-teal-600 rounded-full"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;