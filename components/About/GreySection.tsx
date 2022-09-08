const GreySection = () => {

const goals = [
  "equal access to education ",
  "A place where everyone feels accepted and welcome",
  "LGBTQIA+ support",
  "BBBEE support",
];

  return <section className="py-16 bg-slate-300">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center mb-4 text-2xl font-bold text-gray-800 uppercase">Goals</h2>
      <div className="grid grid-cols-4 py-4 gap-8">
      {goals.map((goal, i) => (
        <h4 key={i} className="text-center uppercase text-md font-bold text-gray-900">{goal}</h4>
      ))}
      </div>
    </div>
  </section>;
};
export default GreySection;
