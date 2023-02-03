import './JSONCodeHighlighter.scss'

import React from 'react';

const JSONCodeHighlighter = ({ code }) => {
  return (
    <pre className='highlighter_container'>
      <code>
        {JSON.stringify(code, null, 2)}
      </code>
    </pre>
  );
};

export default JSONCodeHighlighter;
