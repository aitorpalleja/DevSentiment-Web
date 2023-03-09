import './SpamDetection.scss'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpamDetection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://drab-cyan-perch-tutu.cyclic.app/getSpamCount');
            setData(result.data);
        };

        fetchData();

    }, []);

    const maxSpam = Math.max(...data.map(item => item.spamTweets));
    const step = Math.ceil(maxSpam / 4);

    const axisData = Array(5)
        .fill(0)
        .map((_, index) => index * step);

    return (
        <div className='spamDetection_container'>
            <div className='spamDetection_title-container'>
                <h3 className='spamDetection_title'>
                    <span className='spamDetection_title-text'>
                        <span className='spamDetection_title-span'>S</span>pam&nbsp;
                        <span className='spamDetection_title-span'>D</span>etection
                    </span>
                </h3>
            </div>
            <h4 className='horizontalBar_data-source'><span className='spamDetection_title-span'>S</span>pam tweets from the last <span className='spamDetection_title-span'>24 hours</span>:</h4>

            <div className="spamDetection_chart-container">
                {data.map((item, index) => (
                    <div className="spamDetection_chart" key={index}>
                        <div className="spamDetection_topic">
                            <span className="first-letter">{item.topic.charAt(0)}</span>
                            {item.topic.substring(1)}
                        </div>                        
                        <div className="spamDetection_chart-positive" 
                            style={{ width: `${(item.spamTweets / maxSpam) * 100}%` }}
                            title={`There are ${item.spamTweets} spam tweets mentioning ${item.topic} in the last 24 hours.`}

                        >
                            {`${item.spamTweets} `}
                        </div>
                    </div>
                ))}
            </div>
            <div className='spamDetection_axis-container'>
                {axisData.map((item, index) => (
                    <span className='spamDetection_axis-item' key={index}>
                        {item}
                    </span>
                ))}
            </div>

        </div>
    )
};

export default SpamDetection;
