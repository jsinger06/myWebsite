import React from "react";

/*const strengthList = [
    'Focused on Customers',
    'Persuade Stakeholders',
    'Building Relationships',
    'Translate Between Business & Technical',
    'Train / Mentor Team Members',
    'Partner with Engineers',
    'Quick Learner',
    'Drive Results',
    'Diagnose / Solve Complex Problems'
];*/

const StrengthListSection = ( { strengthList = [] } ) => (
    <div className="strength-grid">
        { strengthList.map( (strength, key) => (
            <p className="strength" key={key}>{strength}</p>
        ))}
    </div>
);

export default StrengthListSection;