import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import LeetCode from './components/LeetCode';
import Trajectory from './components/Trajectory';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <LeetCode />
        <Trajectory />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
