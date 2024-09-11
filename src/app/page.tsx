import { Button } from "@/components/ui/button";
import { Grid } from "lucide-react";
import Image from "next/image";
import HomeSection from '../containers/home';
import AboutSection from '../containers/about';
import ContactSection from '../containers/contact';
import SkillsSection from '../containers/skills';
import ProjectsSection from '../containers/projects';

export default function Home() {
  return (
   <div  className="containet space-y-16 py-28 "> 
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection />

   </div>
  
  );
}
