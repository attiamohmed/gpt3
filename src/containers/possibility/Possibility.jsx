import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibilityImage'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Unlock the Future Now</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Unlock the power of GPT-3 and explore a world where your imagination knows no bounds. This revolutionary AI can create, innovate, and elevate your projects to new heights. Whether you're developing chatbots, generating content, or seeking solutions, GPT-3 is your ultimate tool for limitless potential.</p>
        <h4> Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
