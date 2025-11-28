import Hero from "./_component/hero";
import About from "./_component/about";
import Companies from "./_component/companies";
import Timeline from "./_component/timeline";
import ContactCTA from "./_component/contact-cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <About />
      <Timeline />
      <ContactCTA />
    </div>
  );
}
