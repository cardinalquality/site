import { HiUsers, HiLightBulb, HiCog, HiClipboardCheck, HiHeart, HiTrendingUp } from 'react-icons/hi';

export default function Services() {
  const services = [
    {
      icon: HiClipboardCheck,
      title: 'Product & User Validation',
      description:
        'Build company-wide user validation systems using Centercode and modern feedback frameworks. I helped Output establish beta programs that shaped MVP scope, informed roadmap priorities, and achieved executive adoption across departments—turning user insights into shared inputs for product decisions.',
    },
    {
      icon: HiUsers,
      title: 'Engineering Leadership & OKRs',
      description:
        'Scale teams with VP-level reporting frameworks, OKR systems, and structured performance coaching. I build QA organizations from scratch, establish career frameworks, and translate analytics insights into prioritized backlogs that align engineering, product, and business goals.',
    },
    {
      icon: HiCog,
      title: 'Release Systems & Continuous Delivery',
      description:
        'Transform release chaos into confidence with shift-left practices and continuous delivery pipelines. I design release scorecards, go/no-go frameworks, and risk dashboards that achieved 87% regression reduction and 99% crash-free rates through proactive prevention.',
    },
    {
      icon: HiLightBulb,
      title: 'Test Strategy & AI-Assisted Workflows',
      description:
        'Build modern test strategies using AI-powered workflows (ChatGPT, Claude, Cursor, n8n), LLM-based test generation, and intelligent automation. I help teams scale from zero to hundreds of tests integrated into CI/CD pipelines with clear KPIs tracking coverage and quality trends.',
    },
    {
      icon: HiHeart,
      title: 'Build a Quality Culture',
      description:
        'Quality isn\'t just QA\'s job—it\'s everyone\'s. I help organizations establish company-wide quality standards, integrated workflows, and cross-functional collaboration models where engineering, product, and design share responsibility for customer outcomes.',
    },
    {
      icon: HiTrendingUp,
      title: 'Fractional Product & Process Leadership',
      description:
        'Embedded strategic leadership for growth-stage companies. I translate user research into roadmaps, shape 0-to-1 products, advocate for data-driven launch decisions, and build organizational transformation systems that scale quality and velocity together.',
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
