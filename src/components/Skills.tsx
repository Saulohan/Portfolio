
import {  Database, Cloud, Smartphone, Globe, Server, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Angular", "React", "HTML & CSS", "JavaScript & jQuery", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["C#", "Python", "Java", ".NET", "Node.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL Server", "PostgreSQL", "MongoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["Azure DevOps", "Git", "Docker", "CI/CD"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Infraestrutura e Performance",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Redis", "Elasticsearch", "RabbitMQ"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Conhecimentos & Tecnologias
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4 mx-auto`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-gray-50 rounded-lg px-3 py-2 text-center text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
