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
        <div className="relative min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          {/* Aurora Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-aurora mix-blend-multiply dark:mix-blend-hard-light" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 opacity-20 animate-aurora mix-blend-multiply dark:mix-blend-hard-light" />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <Overview />
              <Experience />
              <Projects />
              <Articles />
              <SocialMedia />
            </main>
            
            {/* Test Footer */}
            <footer className="relative z-10 text-center py-4 text-gray-600 dark:text-gray-400">
              <p>© 2024 Erol Kuluslu - Updated with Automatic Deployment</p>
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 