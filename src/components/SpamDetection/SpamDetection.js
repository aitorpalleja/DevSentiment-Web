import './SpamDetection.scss'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpamDetection = () => {
    const [data, setData] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:3001/getSpamCount');
            setData(result.data);
        };

        fetchData();

        setContainerWidth(document.querySelector(".spamDetection_chart-container").offsetWidth);
    }, []);

    const maxSpam = Math.max(...data.map(item => item.spamTweets));

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

            <div className="spamDetection_chart-container">
                {data.map((item, index) => (
                    <div className="spamDetection_chart" key={index}>
                        <div className="spamDetection_topic">{item.topic}</div>
                        <div className="spamDetection_chart-positive" style={{ width: `${(item.spamTweets / maxSpam) * containerWidth}px` }}>
                            {`${item.spamTweets} `}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SpamDetection;
