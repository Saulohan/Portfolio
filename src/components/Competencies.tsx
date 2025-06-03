
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import competenciesData from '../data/competenciesData.json';

const Competencies = () => {
  const { t: textTranslated, i18n } = useTranslation(('competencies'));
  
  const competencies = competenciesData.items.map(item => ({
    id: item.id,
    name: textTranslated(`competencies.items.${item.id}`),
    level: item.level || 0,
    proficiency: textTranslated(`competencies.labels.proficiency`)
  }));

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {textTranslated(`competencies.title`)}
        </h2>
        
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span>{comp.proficiency}</span>
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
