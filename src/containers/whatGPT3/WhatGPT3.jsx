
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title='What is GPT-3' text='Meet GPT-3, the revolutionary language model by OpenAI that understands and creates human-like text. Whether its powering chatbots, crafting stories, or answering questions, GPT-3 does it all. Dive into its endless possibilities and redefine your tech experience.'  />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title='Chatbots' text='Create intelligent chatbots that can carry out conversations, provide customer support, and engage with users like never before. With GPT-3, your chatbots will feel more human and responsive. '/>
      <Feature title='Knowledgebase' text='Transform your knowledgebase with AI that understands context and retrieves information seamlessly. GPT-3 can enhance your information systems, making them smarter and more intuitive.'/>
      <Feature title='Education' text='Revolutionize education with GPT-3. From personalized learning assistants to automated grading and feedback, this powerful AI can support educators and students in achieving their goals more efficiently.'/>
    </div>
  </div>
);

export default WhatGPT3;
