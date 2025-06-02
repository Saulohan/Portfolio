
const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Sobre Mim
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Sou Saulo Lohan Matoso Soares, Engenheiro de Software com 25 anos, 
              apaixonado por desenvolvimento Full Stack e liderança técnica. 
              Com mais de dois anos de experiência no mercado de tecnologia, 
              atuei em empresas de inovação e transformação digital, 
              sempre com foco em criar soluções eficientes, 
              escaláveis e alinhadas às necessidades de negócio.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Ao longo da minha trajetória, participei de projetos nas áreas de inovação, 
              logística, otimização e pesquisa, contribuindo tanto no front-end quanto no back-end, 
              sempre com foco em aplicar boas práticas como SOLID, Clean Code, Clean Architecture e DDD.
              Tenho experiência com construção de APIs RESTful, microsserviços, mensageria com RabbitMQ,
              rastreamento com Elasticsearch, além de modelagem e otimização de bancos de dados
              relacionais e não relacionais (SQL Server, PostgreSQL e MongoDB).
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Já atuei como líder técnico, sendo responsável por definição de padrões, revisão de código,
              mentoria de desenvolvedores e condução de decisões estratégicas em conjunto com áreas de produto,
              QA e arquitetura. Também assumi funções de coordenação de times,
              com experiência em priorização de backlog técnico e facilitação de entregas
              com metodologias ágeis como Scrum e Kanban.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Como desenvolvedor e co-fundador de uma startup voltada ao desenvolvimento sob demanda, 
              trabalho diretamente na criação de soluções personalizadas, utilizando tecnologias como C#,
              .NET, ReactJS, Tailwind CSS, TypeScript, entre outras, com foco em entregar valor ao cliente
              por meio de tecnologia eficiente e bem estruturada. 
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Sou movido por inovação, aprendizado constante e pela busca por desafios que
              impulsionem meu crescimento técnico e profissional. Acredito no poder da colaboração,
              da liderança positiva e da engenharia de software bem aplicada para gerar impacto real
              nos produtos e nas pessoas.          
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
