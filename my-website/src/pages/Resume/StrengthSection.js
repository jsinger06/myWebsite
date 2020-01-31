import React from "react";

const strengthList = [
    'Focused on Customers',
    'Persuade Stakeholders',
    'Building Relationships',
    'Translate Between Business &amp; Technical',
    'Train / Mentor Team Members',
    'Partner with Engineers',
    'Quick Learner',
    'Drive Results',
    'Diagnose / Solve Complex Problems'
];

const StrengthListSection = () => (
    <>
        { strengthList.map( (strength, key) => (
            <p className="strength" key={key}>{strength}</p>
        ))}
    </>
);

export default StrengthListSection;