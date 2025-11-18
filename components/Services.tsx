import { HiUsers, HiLightBulb, HiCog, HiClipboardCheck, HiHeart, HiTrendingUp } from 'react-icons/hi';

export default function Services() {
  const services = [
    {
      icon: HiClipboardCheck,
      title: 'Product & User Validation',
      description:
        'Build user validation systems that surface critical feedback before launch. I help you recruit engaged beta programs, design feedback loops, and create frameworks that make user insights a shared input for roadmap decisions across engineering, product, and design.',
    },
    {
      icon: HiUsers,
      title: 'Engineering Leadership',
      description:
        'Scale your team with the leadership practices that turn individual contributors into high-performing units. From hiring frameworks to career development, I help you build QA organizations and coach teams through structured feedback that elevates performance and fosters growth.',
    },
    {
      icon: HiCog,
      title: 'Release Systems',
      description:
        'Stop release chaos with repeatable systems that give you confidence. I design release scorecards, risk assessment frameworks, and go/no-go decision models that connect test coverage, regression trends, and user sentiment to every deployment.',
    },
    {
      icon: HiLightBulb,
      title: 'Test Strategy',
      description:
        'Move beyond ad-hoc testing with strategic frameworks that scale. I help you build comprehensive test strategies, select the right automation tools, integrate CI/CD pipelines, and establish KPIs that track coverage, regressions, and quality trends.',
    },
    {
      icon: HiHeart,
      title: 'Build a Quality Culture',
      description:
        'Quality isn\'t just QA\'s job—it\'s everyone\'s. I help organizations establish company-wide quality standards, integrated workflows, and cross-functional collaboration models that make quality a shared responsibility across all teams.',
    },
    {
      icon: HiTrendingUp,
      title: 'Scaling Teams & Talent',
      description:
        'Grow your team without losing effectiveness. I help you design team structures, hiring pipelines, and career frameworks that scale with your company. Transform underperformance through SMART goals and coaching that turns challenges into measurable improvement.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-off-white to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-6">
            How I Deliver Results
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Six proven service areas that transform product teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-primary-red" />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                <a
                  href="https://calendly.com/nick-cardinalquality/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary-red font-semibold hover:underline"
                >
                  Book a Call →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
