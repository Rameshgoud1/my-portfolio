
import React from 'react';
import { ExternalLink, Github, Brain, TrendingUp, CloudRain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Facial Emotion Recognition",
      description: "A real-time web app for detecting facial emotions using YOLOv8m for face detection and DeepFace for emotion recognition.",
      techStack: ["Python", "Flask", "React", "YOLOv8", "DeepFace"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      neonColor: "text-purple-400",
      image: "/facial.jpg",
      githubLink: "https://github.com/Rameshgoud1/facial_emotion"
    },
    {
      title: "Salary Prediction Model",
      description: "Predicts salaries based on input features using trained ML algorithms with an intuitive web interface.",
      techStack: ["Python", "Machine Learning", "Flask", "Scikit-learn"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      neonColor: "text-cyan-400",
      image: "/salary.jpg",
      demoLink: "https://salary-prediction-ifm1.onrender.com/",
      githubLink: "https://github.com/Rameshgoud1/salary_prediction"
    },
    {
      title: "Weather Dashboard",
      description: "Predicts  weather Report for the Input location",
      techStack: ["HTML","css","Java script","API"],
      icon:CloudRain,
      gradient: "from-red-500 to-orange-400",
      neonColor: "text-orange-300",
      image: "/weather.jpg",
      demoLink: "https://weatherdashboard17.netlify.app/",
      githubLink:"https://github.com/Rameshgoud1/weather-dashboard.git"
    },
     {
      title: "Weather Dashboard",
      description: "Predicts  weather Report for the Input location",
      techStack: ["HTML","css","Java script","API"],
      icon:CloudRain,
      gradient: "from-red-500 to-orange-400",
      neonColor: "text-orange-300",
      image: "/weather.jpg",
      demoLink: "https://weatherdashboard17.netlify.app/",
      githubLink:"https://github.com/Rameshgoud1/weather-dashboard.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">Showcasing my latest work and innovations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-effect-intense p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg border border-white/20 group-hover:border-blue-400/50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <project.icon size={24} className="text-white" />
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 text-white group-hover:${project.neonColor} transition-all duration-300`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.demoLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-effect-intense hover:border-blue-400/50 text-white border-gray-600 group/btn transition-all duration-300"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect-intense hover:border-blue-400/50 text-white border-gray-600 group/btn transition-all duration-300"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
