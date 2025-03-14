import { Button } from "@/components/ui/button";
import { Grid } from "lucide-react";
import Image from "next/image";
import HomeSection from '../containers/home';
import AboutSection from '../containers/about';
import ContactSection from '../containers/contact';
import SkillsSection from '../containers/skills';
import ProjectsSection from '../containers/projects';
import ScrollToTop from "@/components/scroll-to-top";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/footer";



export default function Home() {
  return (
   <main  className="pt-12 "> 
        <Navbar/>
        <div className="container space-y-16 py-28">
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection />
        </div>
     
        <ScrollToTop/>
        <Footer/>

   </main>
  
  );
}
