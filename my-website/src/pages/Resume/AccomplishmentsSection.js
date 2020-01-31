import React from 'react';

const AccomplishmentsList = [
    'Designed and implemented production performance tracking tool for Pega Mobile giving development team nsights into real world performance',
    'Implemented security improvements to meet end of year objectives in less than 3 months',
    'Fixed production defect that eliminated approximately 240 hours of weekly employee rework and negative customer experiences',
    'Led development team tasked with building an application to manage LOB tax documentation for Fortune 500 Financial Services company',
    'Identified opportunity to reduce redundant API from 14,000 service calls to less than 50 service calls per day minimizing network traffic and failure points'
];

const AccomplishmentsSection = () => (
    <section className="key-accomp">
        <div className="content-wrap item-details divider">
            <h2>Key Accomplishments</h2>
            <ul>
                { AccomplishmentsList.map( (accomplishment, key) => (
                    <li key={key}>{accomplishment}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default AccomplishmentsSection;