import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ConnectButton from './components/ConnectButton';

export default function Home() {
  return (
      <div> 
        <Navbar />
        <Intro />
        <Projects />
        <Footer />
      </div>
  )
}

