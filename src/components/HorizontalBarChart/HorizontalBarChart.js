import './HorizontalBarChart.scss';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import hardcodedData from '../../data/data.json';

const HorizontalBarChart = () => {
  const [data, setData] = useState([]);
  const [showPercent, setShowPercent] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Creamos una copia de los datos y luego los ordenamos por totalTweets
    const sortedData = [...hardcodedData].sort((a, b) => b.totalTweets - a.totalTweets);
    setData(sortedData);
    setIsLoading(false);

    /*
    const fetchData = async () => {
      try {
        const result = await axios('https://drab-cyan-perch-tutu.cyclic.app/getStats');
        setData(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
    */
  }, []);

  return (
    <>
      {isLoading ? (
        <p className='horizontalBar_loader'>Loading...</p>
      ) : (
        <div className='horizontalBar_container'>
          <div className='horizontalBar_title-container'>
            <h3 className='horizontalBar_title-text'>
              <span className='horizontalBar_title-span'>S</span>entiment&nbsp;
              <span className='horizontalBar_title-span'>A</span>nalysis
            </h3>
          </div>
          <h4 className='horizontalBar_data-source'>
            <span className='horizontalBar_title-span'>O</span>riginal tweets from the last <span className='horizontalBar_title-span'>24 hours</span>:
          </h4>
          <table className="horizontalBar_legend">
            <tr>
              <td className="horizontalBar_legend-block-positive"></td>
              <th className="horizontalBar_legend-text">Positive</th>
            </tr>
            <tr>
              <td className="horizontalBar_legend-block-negative"></td>
              <th className="horizontalBar_legend-text">Negative</th>
            </tr>
          </table>

          {data.map((item, index) => (
            <div className="horizontalBar_chart" key={index}>
              <div className="horizontalBar_topic">
                <span className="first-letter">{item.topic.charAt(0)}</span>
                {item.topic.substring(1)}
              </div>
              <div className="horizontalBar_chart-positive"
                style={{ width: `${item.positivePercent}%` }}
                title={`There are ${item.positiveTweets} positive tweets talking about ${item.topic} in the last 24 hours.`}
              >
                {showPercent ? `${item.positivePercent}%` : `${item.positiveTweets}`}
              </div>
              {item.negativeTweets > 0 && (
                <div className="horizontalBar_chart-negative"
                  style={{ width: `${item.negativePercent}%` }}
                  title={`There are ${item.negativeTweets} negative tweets talking about ${item.topic} in the last 24 hours.`}
                >
                  {showPercent ? `${item.negativePercent}%` : `${item.negativeTweets}`}
                </div>
              )}
            </div>
          ))}

          <div className="horizontalBar_button-container">
            <button
              className={`horizontalBar_button ${showPercent ? 'active' : ''}`}
              onClick={() => setShowPercent(true)}>Percent</button>
            <button
              className={`horizontalBar_button ${!showPercent ? 'active' : ''}`}
              onClick={() => setShowPercent(false)}>Count</button>
          </div>
        </div>
      )}
    </>
  );
};

export default HorizontalBarChart;
