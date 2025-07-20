import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Service from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;