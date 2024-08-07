import React from 'react';
import { Brand, CTA, NavBar } from './components';
import { Blog, Footer, Header, Features, WhatGPT3, Possibility } from './containers';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
