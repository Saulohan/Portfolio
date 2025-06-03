
import { Calendar, MapPin, TrendingUp, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import experienceData from '../data/experienceData.json';

interface Position {
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience = () => {

  const [openPositions, setOpenPositions] = useState<string[]>([]);

  const togglePosition = (positionId: string) => {
    setOpenPositions(prev => 
      prev.includes(positionId) 
        ? prev.filter(id => id !== positionId)
        : [...prev, positionId]
    );
  };

  const { t: textTranslated, i18n } = useTranslation('experiences');

  const experiences = experienceData.items.map(item => {
    return {
      id: item.id,
      company: textTranslated(`experiences.companies.${item.name}.company`),
      location: textTranslated(`experiences.companies.${item.name}.location`),
      currently: item.currently,
      positions: textTranslated(`experiences.companies.${item.name}.positions`, { returnObjects: true }) as Position[]
    };
  });

  const certifications = experienceData.certifications.map(item => {
    return {
      id: item.id,
      title: textTranslated(`certifications.${item.id}.title`),
      institution: item.institution,
      status: textTranslated(`certifications.${item.id}.status`),
      linkCertificate: item.linkCertificate
    };
  });

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {textTranslated(`experiences.title`)}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{textTranslated(`experiences.subTitle`)}</h3>
            <div className="space-y-12">
              {experiences.map((company, companyIndex) => (
                <div key={companyIndex} className="relative">
                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{company.company}</h4>
                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{company.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {company.positions.map((position, positionIndex) => {
                        const positionId = `${companyIndex}-${positionIndex}`;
                        const isOpen = openPositions.includes(positionId);
                        
                        return (
                          <Collapsible key={positionIndex} open={isOpen} onOpenChange={() => togglePosition(positionId)}>
                            <div className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-600">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full" />
                              
                              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                                <CollapsibleTrigger className="w-full p-4 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{position.title}</h5>
                                      <div className="flex items-center gap-1 mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{position.period}</span>
                                      </div>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                  </div>
                                </CollapsibleTrigger>
                                
                                <CollapsibleContent className="px-4 pb-4">
                                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                      {position.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </div>
                            </div>                                                        
                          </Collapsible>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{textTranslated(`certifications.subTitle`)}</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{cert.institution}</p>
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.status}
                  </span>
                  <div>
                    <span>Link para certificado:</span>
                    <a href={cert.linkCertificate} className="text-blue-600 font-semibold mb-2 transition-colors duration-300 hover:text-blue-700 hover:underline"
                      > {cert.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;