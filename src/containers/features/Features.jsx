import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Instant Trust Boost ',
    text: 'Turn skeptics into believers with our AI-powered solutions. GPT-3 ensures reliable and satisfying user interactions right from the start, building trust instantly.'
  },
  {
    title: 'Proactive Powerhouse',
    text: 'Stay ahead with proactive AI support. GPT-3 empowers your team to collaborate seamlessly, make swift decisions, and manage tasks efficiently, keeping your operations dynamic and responsive.'
  },
  {
    title: 'Transform Communication',
    text: 'Revolutionize your messaging with AI-driven responses. GPT-3 delivers smart, context-aware interactions that elevate your communication game and add value to every conversation.'
  },
  {
    title: 'Unlock AI Magic',
    text: 'Experience the transformative power of AI across various fields. GPT-3 provides tailored insights and innovative solutions, from legal advice to creative projects, helping you excel in every domain.'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
      </div>
    </div>
  )
}

export default Features
