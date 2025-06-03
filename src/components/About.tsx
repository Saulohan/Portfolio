import { useTranslation } from 'react-i18next';

const About = () => {
  const { t: textTranslated, i18n } = useTranslation(('about'));
  const paragraphs = textTranslated('about.paragraphs', { returnObjects: true }) as string[];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {textTranslated('about.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
            {paragraphs.map((text, idx) => (
              <p key={idx} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
