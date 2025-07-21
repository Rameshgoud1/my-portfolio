
// import React, { useState } from 'react';
// import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';



const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_2kvk6q8',       
      'template_50zvzxr',      
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'mX4OKZuTxOBXaVame'          
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      console.error('EmailJS Error:', error);
    });
  };



  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-intense font-mono neon-pulse">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full neon-box"></div>
          <p className="text-gray-300 mt-4 text-lg neon-glow-medium">Ready to start your next project? Let's collaborate!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse">
              <h3 className="text-2xl font-bold mb-6 text-white neon-glow-medium">Let's Connect</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply have a conversation about web development and technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center neon-box-intense">
                    <Mail size={20} className="text-white neon-glow-medium" />
                  </div>
                  <div>
                    <p className="text-white font-medium neon-glow-medium">Email</p>
                    <p className="text-gray-300">poladasurameshgoud@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center neon-box-intense">
                    <MapPin size={20} className="text-white neon-glow-medium" />
                  </div>
                  <div>
                    <p className="text-white font-medium neon-glow-medium">Location</p>
                    <p className="text-gray-300">Available for Remote Work</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/Rameshgoud1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:neon-border-intense group neon-box hover:neon-box-intense"
                >
                  <Github size={20} className="text-white group-hover:scale-110 transition-transform group-hover:neon-glow-medium" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:neon-border-intense group neon-box hover:neon-box-intense"
                >
                  <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform group-hover:neon-glow-medium" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-effect-intense p-8 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse" style={{animationDelay: '0.2s'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 focus:neon-glow-medium transition-all duration-300"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 focus:neon-glow-medium transition-all duration-300"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none focus:neon-glow-medium transition-all duration-300"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full neon-box-intense bg-transparent hover:bg-blue-600/20 text-white border-blue-400 py-3 text-lg font-medium transition-all duration-300 group hover:neon-border-intense"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform group-hover:neon-glow-medium" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect-intense p-6 rounded-2xl inline-block neon-border-intense">
            <p className="text-gray-300 neon-glow-medium">
              © 2025 Poladasu Ramesh Goud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
