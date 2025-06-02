
import { Mail, Phone, MapPin, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if(name === '' || email === '' || message === '') {
    alert("Preencha todos os campos");
    return;
  }

  if (formRef.current) {
    emailjs.sendForm(
      'service_zh1pf6w',
      'template_z9uh5ab',
      formRef.current,
      '5inbpLGRjkZG6d7Hs'
    )
    .then((result) => {
      console.log('Email enviado', result.text);
      alert('Mensagem enviada com sucesso!');
      setName('');
      setEmail('');
      setTitle('');
      setMessage('');
    }, (error) => {
      console.log(error.text);
      alert('Erro ao enviar a mensagem.');
    });
  }
};

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Vamos Conversar?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Entre em Contato</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Se você tem uma ideia ou quer discutir uma colaboração, não hesite em entrar em contato!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 text-white bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-secondary-foreground">Email</p>
                  <p className="text-muted-foreground">saulolohan09@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 text-white bg-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-secondary-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">+55 (88) 99699-6447</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-secondary-foreground">Localização</p>
                  <p className="text-muted-foreground">Russas, Ceará, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Saulohan" className="w-12 h-12 bg-[#181717] rounded-lg flex items-center justify-center hover:bg-[#2f2f2f] transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>

              <a href="https://www.linkedin.com/in/saulo-lohan/" className="w-12 h-12 bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-[#006097] transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>

              <a href="mailto:saulolohan09@gmail.com" className="w-12 h-12 bg-[#1D4ED8] rounded-lg flex items-center justify-center hover:bg-[#2563eb] transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>

              <a href="https://wa.me/5588996996447" className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#1ebe5b] transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-white" />
              </a>

              <a href="https://www.instagram.com/sauloo_1/" className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:brightness-110 transition-all duration-300">
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="bg-card/50 dark:bg-white/5 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Envie uma Mensagem</h3>
            
            <form className="space-y-6 form" onSubmit={sendEmail} ref={formRef}>
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 transition-colors rounded-lg bg-background border border-border focus:border-primary focus:outline-none dark:bg-white/10 dark:border-white/20 dark:focus:border-blue-400" 
                  placeholder="Seu nome completo"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 transition-colors rounded-lg bg-background border border-border focus:border-primary focus:outline-none dark:bg-white/10 dark:border-white/20 dark:focus:border-blue-400" 
                  placeholder="seu@email.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">Assunto</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 transition-colors rounded-lg bg-background border border-border focus:border-primary focus:outline-none dark:bg-white/10 dark:border-white/20 dark:focus:border-blue-400" 
                  placeholder="Assunto da mensagem"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-card-foreground">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 transition-colors rounded-lg bg-background border border-border focus:border-primary focus:outline-none dark:bg-white/10 dark:border-white/20 dark:focus:border-blue-400" 
                  placeholder="Sua mensagem..."
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
