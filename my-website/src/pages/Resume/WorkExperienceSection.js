import React from "react";

const workExperienceList = [{
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

const WorkExperience = () => (
<section className="work-experience">
    <div className="content-wrap item-details divider">
        <h2>Work Experience</h2>
        {/* Job 3 */}
        <section className="job-item">
            <div className="job-details">
                <h3 className="job-company">{workExperienceList[0].company}</h3>
                { workExperienceList[0].roles.map( ( role, key ) =>(
                    <div key={key}>
                        <h4>{ role.title }</h4>
                        <p>{ role.dates }</p>
                    </div>
                ))}
            </div>
            <div className="job-summary">
                <p>{ workExperienceList[0].jobDescription.description }</p>
                <ul>
                    { workExperienceList[0].jobDescription.accomplishments.map( (jobAccomp, key ) => (
                        <li key={key}>{jobAccomp}</li>
                    ))}

                </ul>
            </div>
        </section>
    </div>
</section>
);

export default WorkExperience;



/*{/!* Job Current *!/}
<section className="job-item">
    <div className="job-details">
        <h3>Software Engineer</h3>
        <p className="job-company">ACS Group (Client: Verizon)</p>
        <p>May 2019 - Present</p>
    </div>
    <div className="job-summary">
        <p>Leveraged Pega framework as an orchestration engine in a microservices architecture. Coordinated with multiple teams and applications to deliver and test products from end to end. Supported testing in multiple environments while leading development within the project.</p>
    </div>
</section>
{/!* Job 2 *!/}
<section className="job-item">
    <div className="job-details">
        <h3>Software Engineer</h3>
        <p className="job-company">Cox Automotive</p>
        <p>July 2017 - May 2019</p>
    </div>
    <div className="job-summary">
        <p>Leveraged Pega Mobile framework and Javascript to deliver a mobile application for internal users. Worked directly with end users and business partners to investigate production issues and to identify functional improvements for the application. Actively worked with fellow team members to identify opportunities and solutions for team performance improvement.</p>
    </div>
</section>
{/!* Job 3 *!/}
<section className="job-item">
            <div className="job-details">
                <h3>Application Developer Lead</h3>
                <p className="job-company">JPMorgan Chase</p>
                <p>May 2014 - July 2017</p>
                <h3>Application Developer</h3>
                <p>January 2011 - May 2014</p>
            </div>
            <div className="job-summary">
                <p> </p>
                <ul>
                    <li>Instrumental during prioritization, planning, and design of applications on multiple simultaneous projects</li>
                    <li>Worked closely with business partners and business analysts to help gather requirements and providing design input</li>
                    <li>Managed teams working on back-end, customer critical application development projects</li>
                    <li>Worked on development team to deliver Pega PRPC applications resulting in savings of $450K+ yearly</li>
                    <li>Trained and mentored developers new to Pega PRPC to ensure an understanding of best practices and standards</li>
                </ul>
            </div>
        </section>*/

