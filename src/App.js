import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        < Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
