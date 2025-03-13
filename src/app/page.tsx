import "@/app/globals.css";
import AboutMe from "@/components/Sections/HomePage/AboutMe";
import CompletedProjects from "@/components/Sections/HomePage/CompletedProjects";
import Contact from "@/components/Sections/HomePage/Contact";
import Educations from "@/components/Sections/HomePage/Educations";
import Footer from "@/components/Sections/HomePage/Footer";
import Header from "@/components/Sections/HomePage/Header";
import Services from "@/components/Sections/HomePage/Services";
import Skills from "@/components/Sections/HomePage/Skills";

export default function Home() {
  return (
    <div className='w-full mx-auto overflow-x-hidden'>
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
    </div>
  );
}
