import './Home.scss'
import React from 'react';

import JSONCodeHighlighter from '../JSONCodeHighlighter/JSONCodeHighlighter.js';

import code from '../../utils/aiTraining.js'


const Home = () => {
  return (
    <div className='home_container'>
      <h1 className='home_title'><span className='home_span'>D</span>ev <span className='home_span'>S</span>entiment</h1>
      <p className='home_pharagraph'>
      Dev Sentiment is a project aimed at providing valuable insights into the current state 
      of the tech industry. It leverages the Twitter API to gather tweets 
      about programming languages and other relevant topics, 
      and uses <span className='home_span'>co:here AI</span> technology to analyze and interpret the 
      sentiment expressed in the tweets.
      </p>
      <JSONCodeHighlighter code={code} />
    </div>
  );
};

export default Home;
