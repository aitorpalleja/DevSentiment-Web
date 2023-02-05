import './JobTrends.scss'

import React from 'react';

const data = [
    { language: 'JavaScript', jobOffers: 1000 },
    { language: 'Python', jobOffers: 450 },
    { language: 'Java', jobOffers: 400 },
    { language: 'C#', jobOffers: 350 },
    { language: 'C++', jobOffers: 300 },
    { language: 'Python', jobOffers: 450 },
    { language: 'Java', jobOffers: 400 },
    { language: 'C#', jobOffers: 350 },
    { language: 'C++', jobOffers: 300 },
];


const JobTrends = () => {
    return (
        <div className='jobTrends_container'>
            <div className='jobTrends_title-container'>
                <h3 className='jobTrends_title'>
                    <span className='jobTrends_title-text'>
                        <span className='jobTrends_title-span'>J</span>ob&nbsp;
                        <span className='jobTrends_title-span'>T</span>rends
                    </span>
                </h3>
            </div>
            {data.map((item, index) => (
                <div className="jobTrends_chart" key={index}>
                    <span className="jobTrends_topic">{item.language}</span>
                    <div
                        className="jobTrends_bar"
                        style={{ width: `${item.jobOffers}px` }}
                    />
                </div>
            ))}

        </div>
    )
};

export default JobTrends;
