
import React from 'react';
import { Download, Eye, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full floating-orb-intense floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full floating-orb-intense floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full floating-orb-intense floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full floating-orb-intense floating-animation" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="slide-in-up mb-8">
          <div className="profile-image-container">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-flow rotating-border p-1">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
              </div>
              <img
                src="ramesh.jpg"
                alt="Poladasu Ramesh Goud"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover profile-image-glow relative z-10"
              />
            </div>
          </div>
        </div>
        
        <div className="slide-in-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-5xl md:text-7xl font-black mb-4 font-mono">
            <span className="gradient-text">Poladasu</span>
            <br />
            <span className="text-white">Ramesh Goud</span>
          </h1>
        </div>
        
        <div className="slide-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Aspiring Full Stack Developer & Data Science Enthusiast
          </p>
          <p className="text-lg text-cyan-400 mb-8 italic">
            "Turning Ideas into Powerful Full Stack Web Experiences"
          </p>
        </div>

        <div className="slide-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{animationDelay: '0.6s'}}>
          <Button 
            className="bg-transparent hover:bg-blue-600/20 text-white border-blue-400 px-8 py-3 text-lg font-medium transition-all duration-300 group hover:border-blue-300"
            onClick={() => window.open('Ramesh_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 group-hover:animate-bounce" size={20} />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            className="glass-effect-intense hover:border-blue-400/50 text-white border-gray-600 px-8 py-3 text-lg font-medium transition-all duration-300 group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            View Projects
          </Button>
        </div>

        <div className="fade-in-scale" style={{animationDelay: '0.8s'}}>
          <ChevronDown 
            className="mx-auto text-gray-400 animate-bounce cursor-pointer hover:text-white transition-all duration-300"
            size={32}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
