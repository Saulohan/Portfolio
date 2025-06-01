
import { Code, GamepadIcon, HeartPulse, BookOpen, DumbbellIcon, Coffee } from 'lucide-react';

const Hobbies = () => {
    const hobbies = [
    {
      name: "Programação",
      icon: <Code className="w-8 h-8" />,
      description: "Criação de projetos pessoais, aprendizado contínuo e contribuição em comunidades open source.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Jogos Estratégicos",
      icon: <GamepadIcon className="w-8 h-8" />,
      description: "Aprimoramento de raciocínio lógico, foco e tomada de decisão em ambientes competitivos.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Musculação",
      icon: <DumbbellIcon className="w-8 h-8" />, 
      description: "Disciplina e constância com treinos regulares para bem-estar físico e mental.",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Leitura",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Exploração de livros técnicos, ficção científica, fantasia, que estimulam a criatividade e a imaginação.",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Corrida",
      icon: <HeartPulse className="w-8 h-8" />, 
      description: "Prática de exercícios aeróbicos para aumentar a resistência, foco e saúde mental.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Café & Tecnologia",
      icon: <Coffee className="w-8 h-8" />,
      description: "Combinação ideal para concentração e produtividade durante sessões de desenvolvimento.",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Hobbies & Interesses
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          Quando não estou programando, gosto de explorar outras paixões que contribuem 
          para meu crescimento pessoal e criatividade. Acredito que hobbies diversificados 
          enriquecem nossa perspectiva profissional.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                {hobby.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                {hobby.name}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
