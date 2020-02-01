import React from "react";

const workExperienceList = [{
    company: 'ACS Group (Client: Verizon)',
    roles: [
        {
            title: 'Software Engineer',
            dates: 'May 2019 - Present',
        }
    ],
    jobDescription: {
        description: 'Leveraged Pega framework as an orchestration engine in a microservices architecture. Coordinated with multiple teams and applications to deliver and test products from end to end. Supported testing in multiple environments while leading development within the project.',
        accomplishments: []
    }
},{
    company: 'Cox Automotive',
    roles: [
        {
            title: 'Software Engineer',
            dates: 'July 2017 - May 2019',
        }
    ],
    jobDescription: {
        description: 'Leveraged Pega Mobile framework and Javascript to deliver a mobile application for internal users. Worked directly with end users and business partners to investigate production issues and to identify functional improvements for the application. Actively worked with fellow team members to identify opportunities and solutions for team performance improvement.',
        accomplishments: []
    }
},{
    company: 'JPMorgan Chase',
    roles: [
            {
            title: 'Application Developer Lead',
            dates: 'May 2014 - July 2017',
            },
            {
                title: 'Application Developer',
                dates: 'January 2011 - May 2014',
            }
        ],
    jobDescription: {
            description: 'Advanced through promotions, culminating in a role as Applications Developer Lead managing multiple teams of up to 6 developers on multiple applications including customer critical applications and regulatory applications.',
            accomplishments: [
                'Instrumental during prioritization, planning, and design of applications on multiple simultaneous projects',
                'Worked closely with business partners and business analysts to help gather requirements and providing design input',
                'Managed teams working on back-end, customer critical application development projects',
                'Worked on development team to deliver Pega PRPC applications resulting in savings of $450K+ yearly',
                'Trained and mentored developers new to Pega PRPC to ensure an understanding of best practices and standards'
            ]
    }
}];

const WorkExperienceItem = ( { workItem } ) => (
        <section className="job-item">
        <div className="job-details">
            <h3 className="job-company">{workItem.company}</h3>
            {workItem.roles.map((role, key) => (
                <div key={key}>
                    <h4>{role.title}</h4>
                    <p>{role.dates}</p>
                </div>
            ))}
        </div>
        <div className="job-summary">
            <p>{workItem.jobDescription.description}</p>
            <ul>
                {workItem.jobDescription.accomplishments.map((jobAccomp, key) => (
                    <li key={key}>{jobAccomp}</li>
                ))}

            </ul>
        </div>
    </section>
    );

const WorkExperienceSection = () => (
    <section className="work-experience">
        <div className="content-wrap item-details divider">
            <h2>Work Experience</h2>
            { workExperienceList.map( (jobItem, key ) => (
                <WorkExperienceItem workItem={ jobItem } key={key}/>
            ))}
        </div>
    </section>
);

export default WorkExperienceSection;