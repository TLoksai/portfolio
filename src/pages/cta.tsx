
const CTA = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Let's discuss your vision and how I can help bring it to life with modern technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;