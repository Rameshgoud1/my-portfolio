
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
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Passion for Development</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate web developer with a deep love for creating innovative and interactive web experiences. 
                My journey in web development is driven by curiosity and the desire to solve real-world problems through code.
              </p>
            </div>

            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense hover:intense-glow-pulse transition-all duration-300 group slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <Code className="neon-cyan mr-3 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Continuous Learning</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Currently expanding my skill set in modern web technologies including React, Python, and Machine Learning. 
                I believe in staying updated with the latest trends and best practices in web development.
              </p>
            </div>

            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense hover:intense-glow-pulse transition-all duration-300 group slide-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <Target className="text-green-400 neon-glow-medium mr-3 group-hover:animate-pulse" size={24} />
                <h3 className="text-xl font-semibold text-white neon-glow-medium">Career Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Actively seeking internship opportunities to apply my skills in real-world projects and collaborate with 
                experienced developers. Ready to contribute to innovative teams and grow as a professional developer.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect-intense p-8 rounded-2xl intense-glow-pulse neon-border-intense">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center neon-box-intense">
                  <Code size={48} className="text-white neon-glow-intense" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text neon-pulse">"Turning Ideas into Interactive Web Experiences"</h3>
                <p className="text-gray-300 text-lg">
                  With a strong foundation in programming and a passion for innovation, I'm ready to take on new challenges 
                  and contribute to exciting web development projects.
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
