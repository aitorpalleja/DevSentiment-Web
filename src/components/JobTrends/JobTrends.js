import "./JobTrends.scss";
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import hardcodedData from "../../data/data.json"; 

const JobTrends = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sortedData = hardcodedData.sort((a, b) => b.jobOffers - a.jobOffers);
    setData(sortedData);
    setIsLoading(false);

    /* 
    const fetchData = async () => {
       try {
         const result = await axios('https://drab-cyan-perch-tutu.cyclic.app/getJobOfferCount');
         setData(result.data);
       } catch (error) {
         console.log(error)
       } finally {
         setIsLoading(false)
       }
     };

     fetchData();
    */
  }, []);

  const maxJobOffers = Math.max(...data.map((item) => item.jobOffers));
  const step = Math.ceil(maxJobOffers / 4);

  const axisData = Array(5)
    .fill(0)
    .map((_, index) => index * step);

  return (
    <>
      {isLoading ? (
        <p className="horizontalBar_loader">Loading...</p>
      ) : (
        <div className="jobTrends_container">
          <div className="jobTrends_title-container">
            <h3 className="jobTrends_title">
              <span className="jobTrends_title-text">
                <span className="jobTrends_title-span">J</span>obs&nbsp;
                <span className="jobTrends_title-span">T</span>rends
              </span>
            </h3>
          </div>

          <h4 className="jobTrends_data-source">
            <span className="jobTrends_title-span">J</span>ob offers from the last <span className="jobTrends_title-span">24 hours</span>:
          </h4>

          <div className="jobTrends_chart-container">
            {data.map((item, index) => (
              <div className="jobTrends_chart" key={index}>
                <div className="jobTrends_topic">
                  <span className="first-letter">{item.topic.charAt(0)}</span>
                  {item.topic.substring(1)}
                </div>
                <div
                  className="jobTrends_chart-positive"
                  style={{ width: `${(item.jobOffers / maxJobOffers) * 100}%` }}
                  title={`There are ${item.jobOffers} job offers for ${item.topic} developers in the last 24 hours.`}
                >
                  {`${item.jobOffers} `}
                </div>
              </div>
            ))}
          </div>
          <div className="jobTrends_axis-container">
            {axisData.map((item, index) => (
              <span className="jobTrends_axis-item" key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default JobTrends;
