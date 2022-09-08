const Services = () => {

  const services = [
    {
      title: "Academic Support",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur mollitia alias aut nobis facere.",
      background: "bg-white",
      color: "text-gray-600",
    },
    {
      title: "Career Guidance",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur mollitia alias aut nobis facere.",
      background: "bg-yellow-700",
      color: "text-gray-50",
    },
    {
      title: "LGBTQIA+ support",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur mollitia alias aut nobis facere.",
      background: "bg-white",
      color: "text-gray-600",
    },
    {
      title: "BBBEE support",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consequatur mollitia alias aut nobis facere.",
      background: "bg-yellow-700",
      color: "text-gray-50",
    },
  ];


  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <pre className="text-base text-gray-600 uppercase">What We Do</pre>
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-6">
          {services.map((service) => (
            <div
              className={`${service.background} ${service.color} shadow-xl shadow-gray-700/40 rounded-tl-[3rem] rounded-br-[3rem] p-8 w-full`}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-base">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
