import './Home.scss'
import React from 'react';

import JSONCodeHighlighter from '../JSONCodeHighlighter/JSONCodeHighlighter.js';

import code from '../../utils/aiTraining.js'


const Home = () => {
  return (
    <div className='home_container'>
      <h1 className='home_title'>Dev Sentiment</h1>
      <p className='home_pharagraph'>
        Dev Sentiment is a project that uses advanced AI technology to 
        analyze and interpret tweets about programming languages and other 
        topics in the tech industry. With this analysis, we aim to provide 
        valuable insights into the current state of the industry, helping 
        developers make informed decisions and stay ahead of the game.
      </p>
      <JSONCodeHighlighter code={code} />

      
    </div>
  );
};

export default Home;
