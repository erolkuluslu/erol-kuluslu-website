import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Articles from './components/Articles'
import Projects from './components/Projects'
import SocialMedia from './components/SocialMedia'
import Experience from './components/Experience'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out">
          {/* Aurora Background - Improved opacity and animation */}
          <div className="fixed inset-0 w-full h-full">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
              opacity-30 animate-aurora-slow mix-blend-multiply dark:mix-blend-hard-light"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-purple-500/10 
              opacity-30 animate-aurora mix-blend-multiply dark:mix-blend-hard-light"
            />
          </div>
          
          {/* Main Content */}
          <div className="relative flex-1 z-10">
            {/* Navbar - Fixed position */}
            <Navbar />
            
            {/* Main Content Area */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 pb-16">
              <div className="space-y-24 scroll-smooth">
                {/* Sections with proper spacing */}
                <section id="overview" className="scroll-mt-20">
                  <Overview />
                </section>
                
                <section id="experience" className="scroll-mt-20">
                  <Experience />
                </section>
                
                <section id="projects" className="scroll-mt-20">
                  <Projects />
                </section>
                
                <section id="articles" className="scroll-mt-20">
                  <Articles />
                </section>
                
                <section id="social" className="scroll-mt-20">
                  <SocialMedia />
                </section>
              </div>
            </main>
            
            {/* Footer - Always at bottom */}
            <footer className="relative z-10 mt-auto py-6 text-center bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Erol Kuluslu - Portfolio Website v1.0
              </p>
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 