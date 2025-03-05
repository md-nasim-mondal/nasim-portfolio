"use client"
import AboutMe from "@/components/Sections/HomPage/AboutMe";
import Educations from "@/components/Sections/HomPage/Educations";
import Header from "@/components/Sections/HomPage/Header";
import Services from "@/components/Sections/HomPage/Services";
import Skills from "@/components/Sections/HomPage/Skills";
import WorkExperience from "@/components/Sections/HomPage/WorkExperience";

export default function Home() {
  return (
    <>
      <header>
      <Header/>
      </header>
      <main>
      <AboutMe/>
      <Skills/>
      <WorkExperience/>
      <Educations/>
      <Services/>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
