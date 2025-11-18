import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ExperienceFrom from '@/components/ExperienceFrom';
import Outcomes from '@/components/Outcomes';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import KeyAchievements from '@/components/KeyAchievements';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyFloatingCTA from '@/components/StickyFloatingCTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ExperienceFrom />
        <Outcomes />
        <Testimonials />
        <Services />
        <KeyAchievements />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <StickyFloatingCTA />
    </>
  );
}
