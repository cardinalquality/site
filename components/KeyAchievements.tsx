export default function KeyAchievements() {
  const capabilities = [
    {
      title: 'Process from Chaos',
      description:
        'I bring structure to teams operating in chaos, establishing the sprint processes, delivery workflows, and operational backbone that let teams ship predictably.',
    },
    {
      title: 'AI Workflows & Automation',
      description:
        'I design custom AI workflows and MCP integrations that automate high-friction work, and build automation and quality frameworks from scratch, so teams move faster and scale without breaking.',
    },
    {
      title: 'User Validation & Beta Programs',
      description:
        'I help teams build the right thing by putting the right validation in place, from beta programs to user research, connecting teams with the people whose feedback actually shapes better products.',
    },
  ];

  return (
    <section className="section-padding bg-primary-red text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Drive Impact</h2>
          <p className="text-lg md:text-xl text-white/90">
            What I bring to product and engineering teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold mb-4">{capability.title}</div>
              <div className="text-white/90 leading-relaxed">{capability.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
