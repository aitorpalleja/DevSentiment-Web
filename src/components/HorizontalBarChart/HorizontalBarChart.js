import './HorizontalBarChart.scss'

import './HorizontalBarChart.scss'

import React, { useState } from 'react';

const HorizontalBarChart = () => {
  const [showPercent, setShowPercent] = useState(true);
  const positivePercent = 70;
  const negativePercent = 30;
  const positiveTweets = positivePercent * 20;
  const negativeTweets = negativePercent * 20;
  const positiveWidth = `${positivePercent}%`;
  const negativeWidth = `${negativePercent}%`;

  return (
    <div className='horizontalBar_container'>
      <div className="horizontalBar_legend">
        <div className="horizontalBar_legend-block horizontalBar_legend-positive"></div>
        <div className="horizontalBar_legend-text">Positive</div>
        <div className="horizontalBar_legend-block horizontalBar_legend-negative"></div>
        <div className="horizontalBar_legend-text">Negative</div>
      </div>

      <div className="horizontalBar_chart">
        <div className="horizontalBar_title">JavaScript</div>
        <div className="horizontalBar_chart-positive" style={{ width: positiveWidth }}>
          {showPercent ? positivePercent + '%' : positiveTweets + ' tweets'}
        </div>
        <div className="horizontalBar_chart-negative" style={{ width: negativeWidth }}>
          {showPercent ? negativePercent + '%' : negativeTweets + ' tweets'}
        </div>
      </div>

      <div className="horizontalBar_button">
        <button onClick={() => setShowPercent(true)}>Percent</button>
        <button onClick={() => setShowPercent(false)}>Count</button>
      </div>
    </div>

  );
};

export default HorizontalBarChart;
