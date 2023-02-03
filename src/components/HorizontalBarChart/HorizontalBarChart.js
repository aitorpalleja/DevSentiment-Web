import './HorizontalBarChart.scss'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HorizontalBarChart = () => {
  const [data, setData] = useState([]);
  const [showPercent, setShowPercent] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://devsentiment.up.railway.app/getStats');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className='horizontalBar_container'>
      <div className="horizontalBar_legend">
        <div className="horizontalBar_legend-block horizontalBar_legend-positive"></div>
        <div className="horizontalBar_legend-text">Positive</div>
        <div className="horizontalBar_legend-block horizontalBar_legend-negative"></div>
        <div className="horizontalBar_legend-text">Negative</div>
      </div>

      {data.map((item) => (
        <div className="horizontalBar_chart">
          <div className="horizontalBar_title">{item.topic}</div>
          <div className="horizontalBar_chart-positive" style={{ width: `${item.positivePercent}%` }}>
            {showPercent ? `${item.positivePercent}%` : `${item.positiveTweets} tweets`}
          </div>
          <div className="horizontalBar_chart-negative" style={{ width: `${item.negativePercent}%` }}>
            {showPercent ? `${item.negativePercent}%` : `${item.negativeTweets} tweets`}
          </div>
        </div>
      ))}
      <div className="horizontalBar_button">
        <button onClick={() => setShowPercent(true)}>Percent</button>
        <button onClick={() => setShowPercent(false)}>Count</button>
      </div>
    </div>
  );
};

export default HorizontalBarChart;
