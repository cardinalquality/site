import { HiLightningBolt, HiCheckCircle, HiTrendingUp } from 'react-icons/hi';

export default function Outcomes() {
  const outcomes = [
    {
      icon: HiLightningBolt,
      title: 'Faster Insights',
      description:
        "User validation and beta programs that surface feedback early, so teams know they're building the right thing before launch.",
    },
    {
      icon: HiCheckCircle,
      title: 'Predictable Releases',
      description:
        'Repeatable release systems that reduce chaos, cut regressions, and increase confidence in every deployment.',
    },
    {
      icon: HiTrendingUp,
      title: 'Scalable Systems',
      description:
        'Agile practices, playbooks, and QA processes that grow with your team and maintain quality at any scale.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-off-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-6">
            Outcomes You Can Achieve
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Transform your product development with systems that deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary-red" />
                </div>
                <h3 className="text-2xl font-bold text-dark-text mb-4 border-b-2 border-primary-red pb-2 inline-block">
                  {outcome.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
