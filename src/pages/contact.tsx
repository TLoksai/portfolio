const Contact = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 py-12 md:py-16 bg-[#E8F0F8] min-h-[70vh]">
      
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 z-10">
        <h3 className="text-lg text-[#00796B] font-semibold">Contact</h3>
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Name:" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email:" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Write Message:" className="w-full p-3 border rounded-md h-32"></textarea>
          <button className="bg-[#00796B] text-white px-6 py-3 rounded-md hover:bg-[#004D40] w-full">CONTACT US</button>
        </form>
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden md:block md:w-1/2 h-full absolute top-10 right-0 flex justify-end">
  <img src="/images/contact1.png" 
       alt="Contact" 
       className="w-[90%] h-auto object-contain" />
</div>


    </section>
  );
};

export default Contact;
