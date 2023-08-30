import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';

export default function Home() {
  return (
      <div> 
        <Intro />
        <Projects />
        <Footer />
        <StickyFooter />
      </div>
  )
}

