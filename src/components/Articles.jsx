import { useEffect, useRef } from 'react';
import { cvData } from '../data/cv-data';

const Articles = () => {
  const articlesRef = useRef(null);
  const { articles } = cvData;

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

    const elements = articlesRef.current.querySelectorAll('.article-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="articles" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200" ref={articlesRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Technical Articles
        </h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="article-item bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md 
                         transform transition-all duration-500 ease-out
                         opacity-0 translate-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
                  </svg>
                  Read on Medium
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles; 