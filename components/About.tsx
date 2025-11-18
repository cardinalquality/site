import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Quote */}
          <div className="mb-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-dark-text italic leading-relaxed">
              "You do not rise to the level of your goals. You fall to the level of your systems."
            </blockquote>
            <p className="text-lg text-gray-600 mt-4">— James Clear, Atomic Habits</p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/nick.jpeg"
                  alt="Nick - Cardinal Quality Consulting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 space-y-6 text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
                About Me
              </h2>

              <p>
                I've spent <span className="font-semibold text-dark-text">20 years</span> building
                quality systems at companies like Google, Fender, Native Instruments, EastWest, and Output.
                What I've learned is this: great products don't come from heroic effort at the end—they
                come from systems that make success repeatable.
              </p>

              <p>
                I specialize in <span className="font-semibold text-dark-text">Agile transformations</span>,
                building <span className="font-semibold text-dark-text">user validation programs</span> that
                shape product direction, and creating{' '}
                <span className="font-semibold text-dark-text">release systems</span> that turn chaos into
                confidence. Whether it's achieving a{' '}
                <span className="font-semibold text-primary-red">94% reduction in bugs</span> or establishing
                beta programs from the ground up, I focus on frameworks that scale with your team.
              </p>

              <p>
                My approach is holistic: I think about the customer, the developer, and the team. Because
                quality isn't just about catching bugs—it's about building the{' '}
                <span className="font-semibold text-dark-text">right thing, the right way, at the right time</span>.
              </p>

              <p className="pt-4">
                <a
                  href="https://calendly.com/nick-cardinalquality/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Let's Talk About Your Challenges
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
