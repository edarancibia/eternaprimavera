import React from 'react';
import Carousel from './components/Carousel';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <header>
        <Carousel />
      </header>
      <main>
        <InfoSection />
        <Gallery />
        <FloatingWhatsAppButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
