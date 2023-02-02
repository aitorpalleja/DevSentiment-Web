import './HorizontalBarChart.scss'

import './HorizontalBarChart.scss'

import React, { useState } from 'react';

const HorizontalBarChart = () => {
  const [showPercent, setShowPercent] = useState(true);
  const positivePercent = 70;
  const negativePercent = 30;
  const positiveCount = positivePercent * 20;
  const negativeCount = negativePercent * 20;
  const positiveWidth = `${positivePercent}%`;
  const negativeWidth = `${negativePercent}%`;

  return (
    <div className='horizontalBar_container'>
      
      <div className="horizontalBar_chart">
        <div className="horizontalBar_title">Javascript</div>
        <div className="horizontalBar_chart-positive" style={{ width: positiveWidth }}>
          {showPercent ? positivePercent + '%' : positiveCount + ' tweets'}
        </div>
        <div className="horizontalBar_chart-negative" style={{ width: negativeWidth }}>
          {showPercent ? negativePercent + '%' : negativeCount + ' tweets'}
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
