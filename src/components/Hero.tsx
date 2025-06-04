
import { Github, Linkedin, Mail, Instagram, MapPin, CalendarDays, GraduationCap, Rocket, Code, Lightbulb    } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t: textTranslated, i18n } = useTranslation(('hero'));
  const descriptions = textTranslated("hero.description", { returnObjects: true }) as string[];
  const icons = [GraduationCap, Rocket, Code, Lightbulb];
  
  return (
    <section className="py-5 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center  text-black dark:text-white relative overflow-hidden ">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 ">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/images/MyImage.jpeg" 
            alt="Saulo Lohan Matoso Soares"
            className="w-72 h-80 mt-5 rounded-[20px] mx-auto mb-6 border-4 border-black dark:border-white/20 shadow-2xl object-cover object-[center_25%]"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-black to-blue-800 dark:from-blue-500 dark:to-purple-600 bg-clip-text text-transparent animate-fade-in delay-300">
          Saulo Lohan
        </h1>
        
        <div className="pl-10 text-left text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-700">
          {descriptions.map((desc, index) => {
            const IconComponent = icons[index];
            return (
              <p key={index} className={`flex items-start ${index !== descriptions.length - 1 ? "mb-2" : ""}`}>
                {IconComponent && <IconComponent className="mr-2 text-blue-600 dark:text-blue-400" size={24} style={{ marginTop: "4px" }} />}
                <span dangerouslySetInnerHTML={{ __html: desc }} />
              </p>
            );
          })}
        </div>
                
        <div className="text-gray-800 dark:text-gray-400 mb-8 animate-fade-in delay-900">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CalendarDays className="w-5 h-5" />
            <span>09/07/1999</span>

            <MapPin className="w-5 h-5" />
            <span>Russas, Ceará, Brasil</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in delay-1000">
          <a href="https://github.com/Saulohan" className="p-3 bg-secondary dark:bg-white/10 rounded-full hover:bg-purple-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/saulo-lohan/" className="p-3 bg-secondary dark:bg-white/10 rounded-full hover:bg-purple-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:saulolohan09@gmail.com" className="p-3 bg-secondary dark:bg-white/10 rounded-full hover:bg-purple-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://wa.me/5588996996447" className="p-3 bg-secondary dark:bg-white/10 rounded-full hover:bg-purple-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
          </a>
         <a href="https://www.instagram.com/sauloo_1/" className="p-3 bg-secondary dark:bg-white/10 rounded-full hover:bg-purple-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <a
          href="https://buymeacoffee.com/saulohan"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-white font-semibold py-2 px-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110 transition duration-300"
        >
          <img src="/images/coffe.png" alt="café" className="w-10 h-10" />
          Buy my coffee
        </a>

      </div>
    </section>
  );
};

export default Hero;
