
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Volunteering from '@/components/Volunteering';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/utils/animations';

const Index = () => {
  useScrollAnimation();
  
  // Set page title
  useEffect(() => {
    document.title = 'Zhi-Hahn See | Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
