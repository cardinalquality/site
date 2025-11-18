export default function KeyAchievements() {
  const stats = [
    {
      number: '94%',
      label: 'Reduction in New Bugs',
      description: 'Through shift-left testing and proactive prevention systems',
    },
    {
      number: '99%',
      label: 'Crash-Free Rate',
      description: 'Achieved through structured quality frameworks and continuous delivery',
    },
    {
      number: '87%',
      label: 'Fewer Regressions',
      description: 'By building release confidence scorecards and risk dashboards',
    },
  ];

  return (
    <section className="section-padding bg-primary-red text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Impact</h2>
          <p className="text-lg md:text-xl text-white/90">
            Real results from real transformations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
