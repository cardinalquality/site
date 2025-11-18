'use client';

import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ben Inada',
      title: 'Staff Software Engineer',
      company: 'Output',
      pullQuote: "Nick's contributions are instrumental to how we operate today.",
      fullText:
        "I worked with Nick during his time managing the Quality Assurance team at Output. As one of his many engineering partners, I collaborated with Nick as he introduced a variety of astutely selected tools and techniques that now form the foundation of our ability to deliver numerous music technology products at a high quality bar. Nick's leadership provided us a robust framework of beta testing and continuous feedback that our teams depend on everyday to ensure our products not only meet quality standards but also delight users and produce positive outcomes for the business. Nick's contributions are instrumental to how we operate today, and I am certain that his future contributions will be just as instrumental to any organization lucky to have him in the future.",
    },
    {
      name: 'Andrew Boscardin',
      title: 'Senior Director of Engineering',
      company: 'Output',
      pullQuote:
        'A thoughtful leader who genuinely cares about the growth and development of his team.',
      fullText:
        "I had the pleasure of working closely with Nick during his time as Senior QA Manager at Output. He was a fantastic collaborator with all of the product squads and other Engineering leaders, always bringing a thoughtful and solution-oriented approach to our work. Nick built an effective and engaged QA team that raised the bar for quality across the organization, and he established Output's beta testing program from the ground up — giving us invaluable insight into our products before release. Beyond his technical impact, Nick is a thoughtful leader who genuinely cares about the growth and development of his team. His leadership, attention to detail, and collaborative spirit made a real difference, and I greatly enjoyed working with him.",
    },
    {
      name: 'Nick Rapattoni',
      title: 'Senior Quality Assurance Engineer',
      company: 'Output',
      pullQuote:
        'Built repeatable processes, championed test automation, bridged the gap between beta testers and developers.',
      fullText:
        "I had the privilege of working under Nick's leadership for the past four years, during which he transformed our QA practice. He built repeatable processes for manual testing, championed test automation, and even implemented Centercode to bridge the gap between beta testers and developers—directly improving backlog prioritization and product direction. As a leader, Nick struck the perfect balance between guidance and autonomy. He encouraged his team to challenge themselves, explore creative solutions, and grow their skills, all while staying on top of release schedules. He cared deeply about our career paths, enabling us to stretch our abilities through education and hack-day style ideation sessions that inspired innovation and collaboration. Nick's holistic approach to quality—considering the customer, the developer, and the team—made a lasting impact. His leadership style not only improved our processes but also fostered a culture of trust, growth, and excellence. Any organization would be fortunate to have him at the helm of their QA practice.",
    },
    {
      name: 'Andrew Coven',
      title: 'Manager',
      company: 'Output',
      pullQuote: "You'd be hard-pressed to find a more human- and customer-centered leader.",
      fullText:
        "Nick and I worked together at Output, and you'd be hard-pressed to find a more human- and customer-centered leader. He didn't just help Output grow and launch the best ethical AI product in music—Output Co-Producer—he also became an expert in Centercode. He was the central hub for filtering hundreds of customers into our beta program and maintaining strong relationships with them through town halls and direct engagement, ensuring real connection between our customers and our company. Nick was also a champion of new technologies, especially in using AI to reduce repetitive drudgery so his team could focus on the most impactful work. Most importantly, he was a flag-bearer for quality. He had the courage to hit the red HALT button when necessary, and the pragmatism to balance quality with execution so that we could deliver at the highest standard in the right amount of time. I wholeheartedly recommend Nick for any role that demands thoughtful, customer-centered leadership. I hope to work with him again in the future.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-6">
            What People Say
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            LinkedIn recommendations from engineers and leaders at Output
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-off-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Pull Quote */}
              <div className="mb-6">
                <div className="text-primary-red text-4xl mb-2">"</div>
                <p className="text-lg font-semibold text-dark-text italic leading-relaxed">
                  {testimonial.pullQuote}
                </p>
              </div>

              {/* Full Testimonial (Expandable) */}
              {expandedIndex === index && (
                <div className="mb-6 text-gray-700 leading-relaxed border-t border-gray-300 pt-6">
                  <p>{testimonial.fullText}</p>
                </div>
              )}

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="text-primary-red font-semibold flex items-center space-x-2 hover:underline mb-6"
              >
                <span>{expandedIndex === index ? 'Show Less' : 'Read Full Recommendation'}</span>
                {expandedIndex === index ? (
                  <HiChevronUp className="w-5 h-5" />
                ) : (
                  <HiChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Author Info */}
              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-dark-text">{testimonial.name}</p>
                <p className="text-gray-600">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
