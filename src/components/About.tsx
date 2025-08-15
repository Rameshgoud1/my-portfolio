
import React from 'react';
import { Code, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-intense font-mono neon-pulse">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full neon-box"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense hover:intense-glow-pulse transition-all duration-300 group slide-in-up">
              <div className="flex items-center mb-4">
                <Heart className="neon-pink mr-3 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Passion for Full Stack Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full stack developer who loves building innovative, user-friendly web applications. 
                Driven by curiosity and problem-solving, I aim to turn ideas into impactful digital solutions.
              </p>
            </div>

            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense hover:intense-glow-pulse transition-all duration-300 group slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <Code className="neon-cyan mr-3 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Continuous Learning</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
               Currently honing my skills in full stack development with modern technologies like React, Spring Boot, Python, and Machine Learning, 
              while staying up to date with the latest trends and best practices in software development.
             </p>
            </div>

            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense hover:intense-glow-pulse transition-all duration-300 group slide-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <Target className="text-green-400 neon-glow-medium mr-3 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Career Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Actively seeking internship opportunities to apply my full stack skills in real-world projects, 
                collaborate with experienced developers, and contribute to innovative teams while growing as a professional.
              </p>

            </div>
          </div>

          <div className="relative">
            <div className="glass-effect-intense p-8 rounded-2xl intense-glow-pulse neon-border-intense">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center neon-box-intense">
                  <Code size={48} className="text-white neon-glow-intense" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text neon-pulse">Turning Ideas into Powerful Full Stack Web Experiences</h3>
                <p className="text-gray-300 text-lg">
                 With a strong foundation in full stack development and a passion for innovation, 
                 I'm ready to tackle new challenges and contribute to impactful software projects.
                 </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
