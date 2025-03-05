"use client"
import AboutMe from "@/components/Sections/HomPage/AboutMe";
import CompletedProjects from "@/components/Sections/HomPage/CompletedProjects";
import Educations from "@/components/Sections/HomPage/Educations";
import Header from "@/components/Sections/HomPage/Header";
import Services from "@/components/Sections/HomPage/Services";
import Skills from "@/components/Sections/HomPage/Skills";

export default function Home() {
  return (
    <>
      <header>
      <Header/>
      </header>
      <main>
      <AboutMe/>
      <Skills/>
      <Educations/>
      <CompletedProjects/>
      <Services/>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
