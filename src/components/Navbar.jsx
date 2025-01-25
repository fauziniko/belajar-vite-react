import React from 'react';
import './Navbar.css'; // Gaya untuk navbar

const Navbar = ({ toggleDarkMode }) => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Desain Rumah</div>
            <ul className="navbar-links">
                <li>
                    <button onClick={() => scrollToSection('hero')}>Home</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('features')}>Keuntungan</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('popular-designs')}>Desain Populer</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('testimonials')}>Testimoni</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('footer')}>Kontak</button>
                </li>
            </ul>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {toggleDarkMode ? 'Terang' : 'Gelap'}
            </button>
        </nav>
    );
};

export default Navbar;
