import './JobTrends.scss'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobTrends = () => {
    const [data, setData] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:3001/getJobOfferCount');
            setData(result.data);
        };

        fetchData();

        setContainerWidth(document.querySelector(".jobTrends_chart-container").offsetWidth);
    }, []);

    const maxSpam = Math.max(...data.map(item => item.jobOffers));
    const step = Math.ceil(maxSpam / 4);

    const axisData = Array(5)
        .fill(0)
        .map((_, index) => index * step);

    return (
        <div className='jobTrends_container'>
            <div className='jobTrends_title-container'>
                <h3 className='jobTrends_title'>
                    <span className='jobTrends_title-text'>
                        <span className='jobTrends_title-span'>J</span>obs&nbsp;
                        <span className='jobTrends_title-span'>T</span>rends
                    </span>
                </h3>
            </div>
            
            <h4 className='jobTrends_data-source'><span className='jobTrends_title-span'>J</span>ob offers from the last <span className='jobTrends_title-span'>24 hours</span>:</h4>

            <div className="jobTrends_chart-container">
                {data.map((item, index) => (
                    <div className="jobTrends_chart" key={index}>
                        <div className="jobTrends_topic">{item.topic}</div>
                        <div className="jobTrends_chart-positive" 
                        style={{ width: `${(item.jobOffers / maxSpam) * containerWidth}px` }}
                        title={`There are ${item.jobOffers} job offers for ${item.topic} developers in the last 24 hours.`}

                        >
                            {`${item.jobOffers} `}
                        </div>
                    </div>
                ))}
            </div>
            <div className='jobTrends_axis-container'>
                {axisData.map((item, index) => (
                    <span className='jobTrends_axis-item' key={index}>
                        {item}
                    </span>
                ))}
            </div>

        </div>
    )
};

export default JobTrends;
