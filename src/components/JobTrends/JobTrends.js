import './JobTrends.scss'

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
