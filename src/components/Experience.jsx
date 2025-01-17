import { useEffect, useRef } from 'react';
import { cvData } from '../data/cv-data';

const Experience = () => {
  const experienceRef = useRef(null);
  const { experience, skills } = cvData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = experienceRef.current.querySelectorAll('.experience-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200" ref={experienceRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Experience & Skills
        </h2>
        
        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="experience-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md
                           transform transition-all duration-500 ease-out
                           opacity-0 translate-y-4"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="experience-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="experience-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Tools & Languages</h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.tools].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 