import { useEffect, useRef } from 'react';

const SocialMedia = () => {
  const socialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = socialRef.current.querySelectorAll('.social-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/erolkuluslu",
      icon: "📚",
      description: "Check out my code repositories and contributions"
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/erol-k%C3%BCl%C3%BC%C5%9Fl%C3%BC-966ba9210/",
      icon: "💼",
      description: "Connect with me professionally"
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://x.com/erolkuluslu",
      icon: "🐦",
      description: "Follow me for tech updates and insights"
    },
    {
      id: 4,
      name: "Medium",
      url: "https://medium.com/@erolkuluslusoftware",
      icon: "📝",
      description: "Read my technical articles and tutorials"
    }
  ];

  return (
    <section id="social" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200" ref={socialRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12 animate-fade-in">
          Connect With Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item opacity-0 group flex flex-col items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {social.icon}
              </span>
              <span className="text-sm sm:text-base text-gray-800 dark:text-white font-medium mb-2">
                {social.name}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-2">
                {social.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 