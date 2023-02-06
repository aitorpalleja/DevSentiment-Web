import './SpamDetection.scss'

import React from 'react';

const data = [
    { language: 'Javascript', jobOffers: 500 },
    { language: 'Python', jobOffers: 450 },
    { language: 'Java', jobOffers: 400 },
    { language: 'C#', jobOffers: 350 },
    { language: 'C++', jobOffers: 300 },
    { language: 'Python', jobOffers: 450 },
    { language: 'Java', jobOffers: 400 },
    { language: 'C#', jobOffers: 350 },
    { language: 'C++', jobOffers: 300 },
];

const maxJobOffers = Math.max(...data.map(item => item.jobOffers));
const step = Math.ceil(maxJobOffers / 4);

const axisData = Array(5)
    .fill(0)
    .map((_, index) => index * step);


const SpamDetection = () => {
    return (
        <div className='jobTrends_container'>
            <div className='jobTrends_title-container'>
                <h3 className='jobTrends_title'>
                    <span className='jobTrends_title-text'>
                        <span className='jobTrends_title-span'>S</span>pam&nbsp;
                        <span className='jobTrends_title-span'>D</span>etection
                    </span>
                </h3>
            </div>
        </div>
    )
};

export default SpamDetection;
