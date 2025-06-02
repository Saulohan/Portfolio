
import { CheckCircle } from 'lucide-react';

const Competencies = () => {
  const competencies = [
    { name: "Liderança", level: 100 },
    { name: "Trabalho em equipe", level: 95 },
    { name: "Empatia", level: 90 },
    { name: "Humildade", level: 92 },
    { name: "Proatividade", level: 94 },
    { name: "Determinação", level: 91 },
    { name: "Otimização", level: 87 },
    { name: "Análise", level: 89 },
    { name: "Comunicação", level: 86 },
    { name: "Resiliência", level: 93 },
    { name: "Tomada de decisão", level: 92 },
    { name: "Mentoria", level: 94 },
    { name: "Pensamento crítico", level: 93 },
    { name: "Accountability", level: 92 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Competências Comportamentais
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencies.map((comp, index) => (
              <div key={comp.name} className="rounded-xl p-6 transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{comp.name}</h3>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${comp.level}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Proficiência</span>
                  <span>{comp.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
