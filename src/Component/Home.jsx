import { NavBar } from "./NavBar";
import About from "./About";
import SkillSet from "./SkillSet";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import GitCalender from "./GitCalender";
import Footer from "./Footer";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-canvas text-ink">
      <NavBar />
      <About />
      <SkillSet />
      <Experience />
      <Project />
      <Education />
      <GitCalender />
      <Footer />
    </main>
  );
}
