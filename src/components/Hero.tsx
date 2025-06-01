
import { Github, Linkedin, Mail, Instagram, MapPin, CalendarDays } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <img 
            src="/images/MyImage.jpeg" 
            alt="Saulo Lohan Matoso Soares"
            className="w-70 h-80 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in delay-300">
          Saulo Lohan
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700 text-justify">
          Graduando em <span className="text-blue-400 font-semibold">Engenharia de Software</span> |<br/> 
          Especialista em <span className="text-purple-400 font-semibold">Inovação e Transformação Digital</span> |<br/>
          👨‍💻 “<span className="font-semibold text-green-300">Desenvolvedor Full Stack</span> construindo soluções escaláveis com tecnologia e propósito” |<br/>
          🧠 “<span className="font-semibold text-yellow-300">Tech Lead</span> apaixonado por desenvolvimento, liderança e transformação digital”
        </p>
                
        <div className="text-gray-400 mb-8 animate-fade-in delay-900">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CalendarDays className="w-5 h-5" />
            <span>09/07/1999</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Russas, Ceará, Brasil</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in delay-1000">
          <a href="https://github.com/Saulohan" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/saulo-lohan/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:saulolohan09@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://wa.me/5588996996447" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
          </a>
         <a href="https://www.instagram.com/sauloo_1/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <a
          href="https://buymeacoffee.com/saulohan"
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-8 inline-block text-white font-semibold py-2 px-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:brightness-110 transition duration-300"
        >
          ☕ Compre meu café
        </a>

      </div>
    </section>
  );
};

export default Hero;
