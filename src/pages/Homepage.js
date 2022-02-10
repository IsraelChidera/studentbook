import React from 'react';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import '../index.css';
import About from '../components/About';
import Features from '../components/Features';
import How from '../components/How';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Homepage = () => {
  return <>
        <div className="homepage">
            < Navbar />
            < Showcase />
            < About />
            < Features />
            < How />
            < Contact />
            < Footer />
        </div>
  </>;
};

export default Homepage;

