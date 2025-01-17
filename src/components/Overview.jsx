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
    <section id="overview" className="py-16 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src={profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadCV}
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200"
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