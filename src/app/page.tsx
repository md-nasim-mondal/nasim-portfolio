import AboutMe from "@/components/Sections/HomPage/AboutMe";
import Educations from "@/components/Sections/HomPage/Educations";
import Header from "@/components/Sections/HomPage/Header";
import WorkExperience from "@/components/Sections/HomPage/WorkExperience";

export default function Home() {
  return (
    <>
      <header>
      <Header/>
      </header>
      <main>
      <AboutMe/>
      <Educations/>
      <WorkExperience/>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
