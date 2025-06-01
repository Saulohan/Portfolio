
import { Calendar, MapPin, TrendingUp, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const Experience = () => {

  const [openPositions, setOpenPositions] = useState<string[]>([]);

  const togglePosition = (positionId: string) => {
    setOpenPositions(prev => 
      prev.includes(positionId) 
        ? prev.filter(id => id !== positionId)
        : [...prev, positionId]
    );
  };

  const experiences = [
    {
      company: "Forlogic",
      location: "Remoto",
      positions: [
        {
          title: "FullStack Developer",
          period: "2025 - Atualmente",
          description: `Desenvolvimento e evolução de novos produtos, utilizando arquitetura CQRS com
            ASP.NET Core e Entity Framework no back-end, e TypeScript, Angular e componentes Syncfusion 
            no front-end. Mmanutenção e suporte a sistemas legados com tecnologias como ASP.NET MVC e 
            Ext JS.`,
          technologies: ["Angular", ".Net", "Azure", "SQL Server"]
        }
      ]
    },
    {
      company: "Resolutis Core",
      location: "Remoto",
      positions: [
        {
          title: "CTO / Desenvolvedor e Co-Fundador",
          period: "2023 - Atualmente",
          description: `Planejamento e definição da arquitetura garantindo escalabilidade, 
            segurança e alta disponibilidade. Modelagem e implementação de banco de dados PostgreSQL, 
            incluindo diagramação e otimização de queries. Automação de processos com CI/CD para 
            integração e entrega contínua. Desenvolvimento backend com .NET, aplicando princípios SOLID e 
            Clean Architecture. Desenvolvimento frontend com ReactJS e Tailwind para interfaces 
            responsivas e performáticas. Liderança técnica e decisões estratégicas alinhadas aos 
            objetivos de negócio.`,
          technologies: [".NET", "PostgreSQL", "ReactJS", "Tailwind", "CI/CD"]
        }
      ]
    },
    {
      company: "FitBank 450",
      location: "Remoto",
      positions: [
      {
        title: "Tech Lead",
        period: "2024 - 2025",
        description: `iderança técnica da equipe de desenvolvimento, com foco na definição de arquitetura
          escalável e sustentável, revisão de código, mentoria e suporte técnico aos desenvolvedores. 
          Responsável pela escolha de tecnologias, gerenciamento da esteira de CI/CD com Azure, 
          implementação de testes automatizados (unitários, integração e E2E), e promoção de boas 
          práticas de desenvolvimento. Condução de reuniões técnicas, workshops, avaliação de riscos 
          técnicos e facilitação da comunicação entre times. Atuação estratégica para garantir a 
          escalabilidade, performance e alinhamento com os objetivos do negócio. Assumiu a coordenação 
          temporária durante ausência da liderança formal.`,
        technologies: ["Liderança Técnica", "Desenvolvimento de Software", "Desenvolvimento Full Stack", 
          "Gestão de Projetos", "Revisão de Código", "Boas Práticas de Programação", "Clean Code", 
          "Princípios SOLID", "Scrum", "Metodologias Ágeis", ".NET Framework", "C#", "JavaScript", 
          "HTML5", "jQuery", "Razor (ASP.NET)", "Postman", "Azure DevOps", "Git", "Redis", "RabbitMQ", 
          "Elasticsearch", "Microsserviços", "Microsoft SQL Server", "Banco de Dados"]
      },
      {
        title: "Desenvolvedor de Sistemas",
        period: "2022 - 2024",
        description: `Desenvolvimento de sistemas e microsserviços escaláveis e de alta performance. 
          Implementação e manutenção de interfaces frontend utilizando CSHTML, JavaScript e arquitetura MVC.
          Criação, otimização e segurança de APIs REST. Atuação com .NET, C#, SQL Server,
          MongoDB e metodologias ágeis. Aplicação de princípios SOLID, 
          Clean Code e padrões de projeto (Builder, Strategy, Factory, Singleton, Iterator).
          Utilização de RabbitMQ para comunicação assíncrona entre microsserviços e ElasticSearch
          para registro e monitoramento de logs. Implementação de testes unitários para garantir
          a qualidade do código.`,
        technologies: [
          ".NET Core",".NET Framework","C#","JavaScript","HTML5","CSS","jQuery","Razor (ASP.NET)","CSHTML",
          "Microsoft SQL Server","MongoDB","RabbitMQ","Elasticsearch","Azure DevOps Server","Postman","APIs RESTful","Microsserviços",
          "Clean Code","Princípios SOLID","Metodologias Ágeis (Scrum e Kanban)" 
        ]
      }
      ]
    }
  ];

  const certifications = [
    {
      title: "Impulso FullStack Web Developer",
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/A9FBEADE.pdf"
    },
    {
      title: "Codelaany | 1st Edition", 
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/5F0DE057.pdf"
    },
    {
      title: "Fortaleza dos CodeMiners", 
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/237F5855.pdf"
    },
    {
      title: "Formação Scrum Master Certification",
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/D801EA92.pdf"
    },
    {
      title: "Formação HTML Web Developer",
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/E00FF4A2.pdf"
    },
    {
      title: "Formação JavaScript Developer",
      institution: "Digital Innovation One",
      status: "Concluído",
      linkCertificate: "https://hermes.dio.me/certificates/70C299D3.pdf"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Experiência & Certificações
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Trilha Profissional</h3>
            <div className="space-y-12">
              {experiences.map((company, companyIndex) => (
                <div key={companyIndex} className="relative">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">{company.company}</h4>
                        <div className="flex items-center gap-1 text-gray-600">
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
                            <div className="relative pl-6 border-l-2 border-blue-200 last:border-transparent">
                              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                              
                              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                                <CollapsibleTrigger className="w-full p-4 text-left hover:bg-gray-50 transition-colors rounded-lg">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h5 className="text-lg font-semibold text-gray-800">{position.title}</h5>
                                      <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>{position.period}</span>
                                      </div>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                  </div>
                                </CollapsibleTrigger>
                                
                                <CollapsibleContent className="px-4 pb-4">
                                  <div className="pt-2 border-t border-gray-100">
                                    <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                      {position.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Certificações</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-green-600 font-semibold mb-2">{cert.institution}</p>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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