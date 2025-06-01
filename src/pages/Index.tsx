
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Competencies from '@/components/Competencies';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Competencies />
      <Projects/>
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;
