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
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Overview />
            <Experience />
            <Projects />
            <Articles />
            <SocialMedia />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App 