import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PopularDesignsSection from './components/PopularDesignsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar'; // Import Navbar
import './styles/styles.css';

const App = () => {
    // State untuk tema gelap/terang
    const [darkMode, setDarkMode] = useState(false);

    // Fungsi untuk toggle mode gelap
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar toggleDarkMode={toggleDarkMode} />
            <HeroSection />
            <FeaturesSection />
            <PopularDesignsSection />
            <TestimonialsSection />
            <FooterSection />
        </div>
    );
};

export default App;
