
// import React from 'react';
// import { Award, CheckCircle, Calendar } from 'lucide-react';

// const Certificates = () => {
//   const certificates = [
//     {
//       title: "Python Beginner Level",
//       platform: "Udemy",
//       issueDate: "May 2025",
//       description: "Comprehensive Python programming course covering fundamentals to advanced topics",
//       skills: ["Python", "Object-Oriented Programming", "Data Structures"],
//       verified: true,
//       image: "/udemy_python.jpg"
//     },
//     {
//       title: "JavaScript For Beginners",
//       platform: "Udemy", 
//       issueDate: "May 2025",
//       description: "Modern JavaScript development from basics to advanced concepts and frameworks",
//       skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
//       verified: true,
//       image:"/udemy_javascript.jpg"
//     }
//     // {
//     //   title: "Python(Basic)",
//     //   platform: "HackerRank", 
//     //   issueDate: "Nov 2023",
//     //   description: "Passed The HackerRank skill certification test",
//     //   verified: true,
//     //   image:"/python_basic certificate_page-0001.jpg"
//     // },
//   ];

//   return (
//     <section id="certificates" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">Certificates</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           <p className="text-gray-300 mt-4 text-lg">Professional certifications and achievements</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {certificates.map((cert, index) => (
//             <div 
//               key={index}
//               className="glass-effect-intense p-4 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
//               style={{animationDelay: `${index * 0.2}s`}}
//             >
//               <div className="relative mb-6">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-55 object-cover rounded-lg border border-white/20"
//                 />
//                 <div className="absolute top-4 right-4 bg-green-500/90 p-2 rounded-full">
//                   <CheckCircle size={20} className="text-white" />
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
//                   <Award size={24} className="text-white" />
//                 </div>
                
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
//                     {cert.title}
//                   </h3>
                  
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="text-blue-400 font-medium">{cert.platform}</span>
//                     <span className="text-gray-400">•</span>
//                     <div className="flex items-center gap-1 text-gray-400">
//                       <Calendar size={14} />
//                       <span>{cert.issueDate}</span>
//                     </div>
//                     {cert.verified && (
//                       <>
//                         <span className="text-gray-400">•</span>
//                         <span className="text-green-400 text-sm">Verified</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 {cert.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {cert.skills.map((skill, skillIndex) => (
//                   <span 
//                     key={skillIndex}
//                     className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;
// import React from 'react';
// import { Award, CheckCircle, Calendar } from 'lucide-react';

// const Certificates = () => {
//   const certificates = [
//     {
//       title: "Python Beginner Level",
//       platform: "Udemy",
//       issueDate: "May 2025",
//       description: "Comprehensive Python programming course covering fundamentals to advanced topics",
//       skills: ["Python", "Object-Oriented Programming", "Data Structures"],
//       verified: true,
//       image: "/udemy_python.jpg"
//     },
//     {
//       title: "JavaScript For Beginners",
//       platform: "Udemy", 
//       issueDate: "May 2025",
//       description: "Modern JavaScript development from basics to advanced concepts and frameworks",
//       skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
//       verified: true,
//       image: "/udemy_javascript.jpg"
//     },
//     {
//       title: "Python (Basic)",
//       platform: "HackerRank", 
//       issueDate: "Nov 2023",
//       description: "Passed the HackerRank skill certification test",
//       skills: ["Python", "Problem Solving"],
//       verified: true,
//       image: "/python_basic_certificate.jpg"
//     }
//   ];

//   return (
//     <section id="certificates" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">Certificates</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
//           <p className="text-gray-300 mt-4 text-lg">Professional certifications and achievements</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {certificates.map((cert, index) => (
//             <div 
//               key={index}
//               className="glass-effect-intense p-4 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group w-full md:h-[460px]"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="relative mb-4">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-3 object-cover rounded-lg border border-white/20"
//                 />
//                 <div className="absolute top-3 right-3 bg-green-500/90 p-1.5 rounded-full">
//                   <CheckCircle size={18} className="text-white" />
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
//                   <Award size={20} className="text-white" />
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
//                     {cert.title}
//                   </h3>

//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="text-blue-400 font-medium">{cert.platform}</span>
//                     <span className="text-gray-400">•</span>
//                     <div className="flex items-center gap-1 text-gray-400">
//                       <Calendar size={14} />
//                       <span>{cert.issueDate}</span>
//                     </div>
//                     {cert.verified && (
//                       <>
//                         <span className="text-gray-400">•</span>
//                         <span className="text-green-400 text-sm">Verified</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <p className="text-gray-300 mb-3 leading-relaxed text-sm">
//                 {cert.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {cert.skills.map((skill, skillIndex) => (
//                   <span 
//                     key={skillIndex}
//                     className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;

import React from 'react';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Python Beginner Level",
      platform: "Udemy",
      issueDate: "May 2025",
      verified: true,
      image: "/udemy_python.jpg",
      link: "https://www.udemy.com/certificate/UC-e6972e88-de4a-44ad-ac6f-15879b68b64d/"
    },
    {
      title: "JavaScript For Beginners",
      platform: "Udemy",
      issueDate: "May 2025",
      verified: true,
      image: "/udemy_javascript.jpg",
      link: "https://www.udemy.com/certificate/UC-1524ad3a-aa5f-41cb-bf2a-3553f3c04ea8/"
    },
    {
      title: "Python (Basic)",
      platform: "HackerRank",
      issueDate: "Nov 2023",
      verified: true,
      image: "/python_basic certificate.jpg",
      link: "https://www.hackerrank.com/certificates/e8b531b969e2"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">Certificates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 text-lg">Professional certifications and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-effect-intense rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group h-[400px] flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 80% Image */}
              <div className="h-[80%] w-full relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
                {cert.verified && (
                  <div className="absolute top-3 right-3 bg-green-500/90 px-2 py-1 rounded-full text-white text-xs flex items-center gap-1">
                    <CheckCircle size={14} />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* 20% Bottom Section */}
              <div className="h-[20%] w-full p-3 bg-[#0f172a] flex flex-col justify-between">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{cert.issueDate}</span>
                  </div>
                  <span className="text-blue-400 font-medium">{cert.platform}</span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Award size={16} className="text-white" />
                    </div>
                    <h3 className="text-white text-sm font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 border border-blue-500 px-2 py-0.5 text-xs rounded-md flex items-center gap-1 hover:bg-blue-500 hover:text-white transition"
                    >
                      <ExternalLink size={30} /> View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
