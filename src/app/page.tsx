import "@/app/globals.css";
import AboutMe from "@/components/Sections/HomPage/AboutMe";
import CompletedProjects from "@/components/Sections/HomPage/CompletedProjects";
import Contact from "@/components/Sections/HomPage/Contact";
import Educations from "@/components/Sections/HomPage/Educations";
import Footer from "@/components/Sections/HomPage/Footer";
import Header from "@/components/Sections/HomPage/Header";
import Services from "@/components/Sections/HomPage/Services";
import Skills from "@/components/Sections/HomPage/Skills";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Services />
        <Educations />
        <CompletedProjects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
