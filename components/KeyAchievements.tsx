export default function KeyAchievements() {
  const stats = [
    {
      number: '450K+',
      label: 'User Community Enabled',
      description: 'Enterprise validation platform adopted across 30+ product teams at scale',
    },
    {
      number: '99%',
      label: 'Crash-Free Rate',
      description: 'Achieved through structured quality frameworks and continuous delivery',
    },
    {
      number: '30+',
      label: 'Product Teams',
      description: 'Cross-functional adoption of validation programs and platform enablement',
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
