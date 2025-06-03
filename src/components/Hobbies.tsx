
import { Code, GamepadIcon, HeartPulse, BookOpen, DumbbellIcon, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hobbies = () => {
  const { t: textTranslated, i18n } = useTranslation(('hobbies'));
  const hobbies = [
    {
      key: "programming",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      key: "games",
      icon: <GamepadIcon className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      key: "workout",
      icon: <DumbbellIcon className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      key: "reading",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      key: "running",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      key: "coffee",
      icon: <Coffee className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          {textTranslated("hobbies.title")}
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          {textTranslated("hobbies.intro")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.key}
              className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                {hobby.icon}
              </div>
              
              <h3 className="text-xl font-bold text-center mb-3 text-card-foreground">
                {textTranslated(`hobbies.items.${hobby.key}.name`)}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {textTranslated(`hobbies.items.${hobby.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
