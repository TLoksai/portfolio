import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Loksai delivered exceptional work on our Knowsy platform. His expertise in full-stack development and attention to detail resulted in a product that exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "/images/testimonial1.jpg", // Placeholder
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "Working with Loksai was a game-changer for our mobile app. His technical skills and problem-solving abilities helped us launch a successful product that our users love.",
    rating: 5,
    image: "/images/testimonial2.jpg", // Placeholder
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager, Digital Solutions",
    content: "Loksai's professionalism and dedication to quality are outstanding. He transformed our vision into a beautiful, functional website that perfectly represents our brand.",
    rating: 5,
    image: "/images/testimonial3.jpg", // Placeholder
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from clients and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;