
import React from 'react';
import { Code, Database, Cpu, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "SQL"],
      gradient: "from-yellow-500 to-orange-500",
      neonColor: "text-yellow-400"
    },
    {
      title: "Web Technologies",
      icon: Database,
      skills: ["HTML", "CSS", "React"],
      gradient: "from-blue-500 to-cyan-500",
      neonColor: "text-cyan-400"
    },
    {
      title: "Data & AI",
      icon: Cpu,
      skills: ["Machine Learning", "Data Analysis"],
      gradient: "from-purple-500 to-pink-500",
      neonColor: "text-purple-400"
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: ["Git", "Version Control"],
      gradient: "from-green-500 to-teal-500",
      neonColor: "text-green-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-effect-intense p-6 rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} className="text-white" />
              </div>
              
              <h3 className={`text-lg font-semibold mb-4 text-white group-hover:${category.neonColor} transition-all duration-300`}>
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-400/30"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-effect-intense p-8 rounded-2xl border border-white/20 inline-block">
            <p className="text-gray-300 text-lg">
              Continuously learning and expanding my skill set to stay current with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
