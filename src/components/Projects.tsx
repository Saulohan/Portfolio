import { ExternalLink, Github, Calendar, Users, Code, ChevronDown, Filter, Info } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projectsData from '../data/projectsData.json';

const Projects = () => {
  const [openProjects, setOpenProjects] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { t: textTranslated, i18n } = useTranslation(('projects'));

  const toggleProject = (projectId: string) => {
    setOpenProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const allProjects = projectsData.projects.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    period: item.period,
    team: textTranslated(`projects.${item.id}.team`),
    image: item.image,
    shortDescription: textTranslated(`projects.${item.id}.shortDescription`),
    fullDescription: textTranslated(`projects.${item.id}.fullDescription`),
    technologies: item.technologies,
    features: textTranslated(`projects.${item.id}.features`, { returnObjects: true }) as string[], 
    liveUrl: item.liveUrl,
    githubUrl: item.githubUrl,
    featured: item.featured,
    isDeployed: item.isDeployed,
  }));

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
        <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
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
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
              </div>
              
              <p className="text-card-foreground leading-relaxed">
                {project.shortDescription}
              </p>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-4">
              <div className="border-t border-border pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">{textTranslated(`projects.descriptionLabel`)}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    {textTranslated(`projects.technologiesLabel`)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-blue-100 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">{textTranslated(`projects.featuresLabel`)}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-100 px-2 py-1 rounded text-xs font-medium">
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
                      className="flex items-center gap-2 bg-blue-600 text-white dark:bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {textTranslated(`projects.buttonViewProject`)}
                    </a>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2 bg-gray-400 dark:bg-gray-700 text-white px-4 py-2 rounded-lg cursor-not-allowed text-sm font-medium opacity-60">
                            <Info className="w-4 h-4" />
                            {textTranslated(`projects.buttonViewProject`)}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{textTranslated(`projects.buttonUnavailable`)}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white dark:bg-purple-900 dark:hover:bg-purple-800 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    {textTranslated(`projects.buttonCode`)}
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
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          {textTranslated(`projects.title`)}
        </h2>
        
        <Tabs defaultValue="destaques" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-300 dark:bg-gray-600">
            <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black" value="destaques">{textTranslated(`projects.featuredProjectsLabel`)}</TabsTrigger>
            <TabsTrigger className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black" value="todos">{textTranslated(`projects.allProjectsLabel`)}</TabsTrigger>
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
                <Filter className="w-5 h-5 text-muted-foreground" />
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