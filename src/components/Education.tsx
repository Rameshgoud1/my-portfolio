
// import React from 'react';
// import { GraduationCap, Star } from 'lucide-react';

// const Education = () => {
//   return (
//     <section id="education" className="py-20 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-intense font-mono neon-pulse">Education</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full neon-box"></div>
//         </div>

//         <div className="glass-effect-intense p-8 md:p-12 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse">
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
//             <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 neon-box-intense">
//               <GraduationCap size={32} className="text-white neon-glow-intense" />
//             </div>
            
//             <div className="flex-1 text-center md:text-left">
//               <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white neon-glow-medium">
//                 Rajeev Gandhi Memorial College of Engineering and Technology
//               </h3>
              
//               <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
//                 <Star className="text-yellow-400 neon-glow-medium animate-pulse" size={20} />
//                 <span className="text-xl font-semibold text-yellow-400 neon-glow-medium">CGPA: 8.78</span>
//               </div>
              
//               <p className="text-gray-300 text-lg neon-glow-medium">
//                 Bachelor of Technology in Engineering
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-8 pt-8 border-t border-gray-700">
//             <p className="text-gray-300 text-center">
//               Strong academic performance with focus on practical application of engineering principles 
//               and modern technology solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow-intense font-mono neon-pulse">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full neon-box"></div>
        </div>

        {/* B.Tech Section */}
        <div className="glass-effect-intense p-8 md:p-12 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 neon-box-intense">
              <GraduationCap size={32} className="text-white neon-glow-intense" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white neon-glow-medium">
                Rajeev Gandhi Memorial College of Engineering and Technology,Nandyal
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="text-yellow-400 neon-glow-medium animate-pulse" size={20} />
                <span className="text-xl font-semibold text-yellow-400 neon-glow-medium">CGPA: 8.78</span>
              </div>

              <p className="text-gray-300 text-lg neon-glow-medium">
                Bachelor of Technology in Engineering (2022 – 2026)
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              Strong academic performance with focus on practical application of engineering principles 
              and modern technology solutions.
            </p>
          </div>
        </div>

        {/* Intermediate Section */}
        <div className="glass-effect-intense p-8 md:p-12 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 neon-box-intense">
              <GraduationCap size={32} className="text-white neon-glow-intense" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white neon-glow-medium">
                Rao's Junior College,Nandyal
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="text-yellow-400 neon-glow-medium animate-pulse" size={20} />
                <span className="text-xl font-semibold text-yellow-400 neon-glow-medium">Marks: 839 / 1000</span>
              </div>

              <p className="text-gray-300 text-lg neon-glow-medium">
                Intermediate (Board of Intermediate Education, AP) | 2020 – 2022
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              Completed Intermediate with a strong foundation in core subjects and excellent academic results.
            </p>
          </div>
        </div>

        {/* SSC Section */}
        <div className="glass-effect-intense p-8 md:p-12 rounded-2xl neon-border-intense slide-in-up intense-glow-pulse">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 neon-box-intense">
              <GraduationCap size={32} className="text-white neon-glow-intense" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white neon-glow-medium">
                Excellent English Medium High School,Nandyal
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Star className="text-yellow-400 neon-glow-medium animate-pulse" size={20} />
                <span className="text-xl font-semibold text-yellow-400 neon-glow-medium">Percentage: 97.33</span>
              </div>

              <p className="text-gray-300 text-lg neon-glow-medium">
                Secondary School Certificate (SSC) | 2020 Batch
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              Achieved excellent academic results in SSC with strong fundamentals and disciplined study habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

