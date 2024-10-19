import './App.css'
import Blogs from './sections/Blogs/Blogs';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Blogs />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
