import { useEffect, useRef } from 'react';
import { cvData } from '../data/cv-data';
import profileImage from '../assets/erol_kuluslu.jpg';

const Overview = () => {
  const { personalInfo } = cvData;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Erol_Kuluslu_CV.pdf';
    link.download = 'Erol_Kuluslu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="overview" className="py-12 sm:py-16 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Profile Image Container */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg ring-2 ring-gray-200 dark:ring-gray-700">
              <img 
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>
          
          {/* Content Container */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              {personalInfo.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadCV}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm sm:text-base"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 