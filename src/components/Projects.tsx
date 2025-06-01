import { ExternalLink, Github, Calendar, Users, Code, ChevronDown, Filter, Info } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const Projects = () => {
  const [openProjects, setOpenProjects] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleProject = (projectId: string) => {
    setOpenProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const allProjects = [
    {
        id: "Pokedex",
        title: "Pokédex",
        category: "Frontend",
        period: "2022",
        team: "1 pessoa",
        image: "/images/pokedex-background.png" ,
        shortDescription: "Aplicação web que exibe todos os Pokémons da API pública PokéAPI em formato de cards.",
        fullDescription: `Este projeto pessoal consiste em uma Pokédex interativa que consome a PokéAPI para listar todos os Pokémons disponíveis.
            Cada Pokémon é exibido em um card contendo imagem, número, nome e tipos. A interface foi construída com foco em design limpo, responsividade e fácil usabilidade.
            O background possui um gradiente suave, e os cards são estilizados conforme o tipo do Pokémon para facilitar a visualização.
            A aplicação é totalmente estática, feita com HTML, CSS e JavaScript puro, sem uso de frameworks.`,
        technologies: ["HTML", "CSS", "JavaScript", "PokéAPI"],
        features: [
            "Consumo de API externa (PokéAPI)",
            "Renderização dinâmica de todos os Pokémons",
            "Cards personalizados por tipo de Pokémon",
            "Layout responsivo com design moderno"
        ],
        liveUrl: "Não se encontra publicado atualmente",
        githubUrl: "https://github.com/Saulohan/Pokedex",
        featured: false,
        isDeployed: false
    },
    {
      id: "shortUrls",
      title: "Short URLs",
      category: "Frontend",
      period: "2023",
      team: "2 pessoas",
      image: "/images/URLShortcuts-background.png",
      shortDescription: "Aplicação web para encurtar links longos.",
      fullDescription: `O projeto Short-URLs é uma aplicação web que permite aos usuários encurtarem URLs longas e compartilhá-las de forma mais conveniente.
        Com apenas alguns cliques, você pode transformar URLs complexas em links curtos e fáceis de lembrar. Além disso, o projeto também oferece estatísticas
        básicas sobre o número de cliques em cada URL encurtada, fornecendo insights úteis sobre o desempenho das suas URLs compartilhadas.`,
      technologies: ["HTML", "CSS", "JavaScript", "PokéAPI"],
      features: [
        "Encurtamento de URLs com interface simples",
        "Design responsivo para diferentes dispositivos"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/LagCompany/Short-URLs",
      featured: true,
      isDeployed: false
    },
    {
        id: "taskManager",
        title: "TaskManager",
        category: "Backend",
        period: "2025",
        team: "1 pessoa",
        image: "/images/taskManager-background.png" ,
        shortDescription: "API robusta para gerenciamento de projetos e tarefas, com foco em testes, escalabilidade e boas práticas de arquitetura.",
        fullDescription: `O TaskManager é uma aplicação backend desenvolvida com .NET 8 que oferece funcionalidades completas para controle
            de projetos e tarefas, voltada à produtividade de equipes e indivíduos.
            O projeto conta com recursos como criação de projetos, tarefas, comentários, geração de relatórios e endpoints documentados com Swagger.
            Além disso, foi estruturado com foco em escalabilidade, testes automatizados e possibilidade de evolução para microsserviços e observabilidade.`,
        technologies: [
            ".NET 8",
            "Entity Framework Core",
            "SQL Server",
            "Docker",
            "XUnit",
            "Swagger",
            "Docker",
            "GitHub Actions (CI)",
        ],
        features: [
            "Criação, edição e exclusão de projetos e tarefas com controle de relacionamento",
            "Criação de comentários vinculados às tarefas",
            "Geração de relatórios de desempenho por projeto",
            "Documentação completa dos endpoints com Swagger",
            "Testes unitários implementados com XUnit e Moq, com cobertura de serviços",
            "Execução via Docker com build local ou imagem publicada no Docker Hub",
        ],
        liveUrl: "http://localhost:8080/swagger",
        githubUrl: "https://github.com/Saulohan/TaskManager",
        featured: true,
        isDeployed: false
    },
    {
        id: "tranningTutor",
        title: "Tranning Tutor",
        category: "Mobile",
        period: "2024",
        team: "1 pessoa",
        image: "/images/appPersonal-background.png", 
        shortDescription: "Aplicativo mobile com telas de login e cadastro desenvolvido em React Native como parte do aprendizado em desenvolvimento mobile.",
        fullDescription: `O Tranning Tutor é um projeto mobile focado na criação das telas de autenticação (login e cadastro) utilizando React Native.
        Desenvolvido com o objetivo de praticar os conceitos fundamentais do desenvolvimento mobile cross-platform, o projeto explora a criação de interfaces responsivas,
        navegação entre telas, gerenciamento de estado e validação de formulários.`,
        technologies: [
            "React Native",
            "Expo",
            "React Navigation",
            "TypeScript",
            "Styled Components"
        ],
        features: [
            "Tela de login com validação de e-mail e senha", //AJUSTA
            "Tela de cadastro com campos de nome, e-mail, senha e confirmação", //ajustar
            "Navegação entre telas utilizando React Navigation",
            "Design responsivo e estilização com Styled Components",
            "Formulários com validação básica de entrada de dados"
        ],
        liveUrl: "",
        githubUrl: "",//commitar
        featured: true,
        isDeployed: false
    },
    {
        id: "rocketNotes",
        title: "RocketNotes",
        category: "FrontEnd",
        period: "2023",
        team: "1 pessoa",
        image: "/images/rocketNotes-background.png", 
        shortDescription: "Sistema de gerenciamento de notas pessoais com React, desenvolvido como parte do curso Explorer da Rocketseat.",
        fullDescription: `RocketNotes é um sistema para organização e gerenciamento de notas pessoais. O projeto foi construído utilizando React durante o módulo de React do curso Explorer da Rocketseat.
        Ele conta com uma interface moderna e responsiva, onde o usuário pode realizar autenticação, criar, visualizar, editar e excluir notas.
        Foi uma oportunidade prática de aplicar os conceitos fundamentais de desenvolvimento Front-End com React, como componentes, roteamento e estado.`,
        technologies: [
            "React",
            "JavaScript",
            "Vite",
            "React Router",
            "Styled Components"
        ],
        features: [
            "Tela de login com validação de usuário",
            "Tela de cadastro com campos de nome, e-mail e senha",
            "Dashboard com listagem de notas",
            "Criação e edição de novas notas",
            "Visualização detalhada e exclusão de notas"
        ],
        liveUrl: "",
        githubUrl: "https://github.com/Saulohan/Projeto_RocketNotes",
        featured: false,
        isDeployed: false
    },
    {
        id: "animeInfo",
        title: "Anime INFO",
        category: "FrontEnd",
        period: "2023",
        team: "1 pessoa",
        image: "/images/animeInfo-background.png", 
        shortDescription: "Um site moderno que consome uma API para exibir informações detalhadas sobre animes populares e recentes.",
        fullDescription: `Anime INFO é um projeto frontend desenvolvido para fornecer uma interface intuitiva e atraente que lista animes,
            exibindo detalhes como sinopse, gênero, avaliações e imagens. O site consome dados de uma API externa e apresenta uma experiência dinâmica e 
            responsiva para os usuários, facilitando a descoberta e pesquisa de animes.`,
        technologies: [
            ["HTML", "CSS", "JavaScript", "AniList API"],
        ],
        features: [
            "Listagem paginada de animes com detalhes completos",
            "Busca e filtro por gênero e popularidade",
            "Layout responsivo para dispositivos móveis e desktop"
        ],
        liveUrl: "https://saulohan.github.io/AnimesList/",
        githubUrl: "https://github.com/Saulohan/AnimesList",
        featured: false,
        isDeployed: true
    }

  ];

  const featuredProjects = allProjects.filter(project => project.featured);
  
  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const categories = ["all", "FullStack", "Frontend", "Mobile", "Backend"];
  const categoryLabels = {
    all: "Todos",
    FullStack: "FullStack",
    Frontend: "Frontend", 
    Mobile: "Mobile",
    Backend: "Backend"
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "FullStack": return "from-blue-500 to-purple-500";
      case "Frontend": return "from-green-500 to-blue-500";
      case "Mobile": return "from-purple-500 to-pink-500";
      case "Backend": return "from-slate-600 to-indigo-600";
      default: return "from-gray-500 to-slate-500";
    }
  };

  const ProjectCard = ({ project }: { project: typeof allProjects[0] }) => {
    const isOpen = openProjects.includes(project.id);
    
    return (
      <Collapsible key={project.id} open={isOpen} onOpenChange={() => toggleProject(project.id)}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className={`absolute top-4 right-4 bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {project.category}
            </div>
          </div>
          
          <div className="p-6">
            <CollapsibleTrigger className="w-full text-left group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {project.shortDescription}
              </p>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-4">
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Descrição Completa</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Principais Funcionalidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                {project.isDeployed ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed text-sm font-medium opacity-60">
                            <Info className="w-4 h-4" />
                            Ver Projeto
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Este projeto não está disponível online no momento.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </div>
      </Collapsible>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Projetos Desenvolvidos
        </h2>
        
        <Tabs defaultValue="destaques" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="destaques">Projetos em Destaque</TabsTrigger>
            <TabsTrigger value="todos">Todos os Projetos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="destaques">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="todos">
            <div className="space-y-8">
              <div className="flex items-center gap-4 justify-center">
                <Filter className="w-5 h-5 text-gray-600" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrar por categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="-ml-4">
                  {filteredProjects.map((project) => (
                    <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;