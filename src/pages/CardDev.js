import React from 'react';
import Header from '../components/Header'
import Resume from '../components/Resume';
import Skillset from '../components/Skillset';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact  from '../components/Contact';

export default function CardDev() {
    return (
        <div className="in">
            <Header />
            <Resume />
            <Skillset />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}