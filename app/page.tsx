import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import CoreExpertise from "@/components/CoreExpertise";
import Achievements from "@/components/Achievements";
import WhyHireMe from "@/components/WhyHireMe";
import ResumeDownload from "@/components/ResumeDownload";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <CoreExpertise />
      <Achievements />
      <WhyHireMe />
      <ResumeDownload />
      <Contact />
    </>
  );
}
