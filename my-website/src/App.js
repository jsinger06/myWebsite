import React from 'react';
import './App.css';

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
]

const StrengthListSection = () => (
    <>
        { strengthList.map( (strength, key) => (
            <p className="strength" key={key}>{strength}</p>
        ))}
    </>
);

function App() {
    return (
        <div>
        // <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Josh Singer - Senior Software Engineer</title>
    <link href="https://fonts.googleapis.com/css?family=Quintessential|Montserrat:400,600&display=swap" rel="stylesheet" />
        <main>
        {/* ***********************  ABOUT / PROFILE  *********************** */}
        <header>
        <div className="content-wrap">
        <h1>Joshua Singer</h1>
    <h2>Senior Software Engineer</h2>
    <div className="strength-grid">
        <StrengthListSection />
    </div>
</div>
    </header>
    {/* ***********************  Key Accomplishments  *********************** */}
<section className="key-accomp">
        <div className="content-wrap item-details divider">
        <h2>Key Accomplishments</h2>
    <ul>
    <li>Designed and implemented production performance tracking tool for Pega Mobile giving development team nsights into real world performance</li>
    <li>Implemented security improvements to meet end of year objectives in less than 3 months</li>
    <li>Fixed production defect that eliminated approximately 240 hours of weekly employee rework and negative customer experiences</li>
    <li>Led development team tasked with building an application to manage LOB tax documentation for Fortune 500 Financial Services company</li>
    <li>Identified opportunity to reduce redundant API from 14,000 service calls to less than 50 service calls per day minimizing network traffic and failure points</li>
    </ul>
    </div>
    </section>
    {/* ***********************  WORK EXPERIENCE  *********************** */}
<section className="work-experience">
        <div className="content-wrap item-details divider">
        <h2>Work Experience</h2>
    {/* Job Current */}
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
    {/* Job 2 */}
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
    {/* Job 3 */}
<section className="job-item">
        <div className="job-details">
        <h3>Application Developer Lead</h3>
    <p className="job-company">JPMorgan Chase</p>
    <p>May 2014 - July 2017</p>
    <h3>Application Developer</h3>
    <p>January 2011 - May 2014</p>
    </div>
    <div className="job-summary">
        <p>Advanced through promotions, culminating in a role as Applications Developer Lead managing multiple teams of up to 6 developers on multiple applications including customer critical applications and regulatory applications. </p>
    <ul>
    <li>Instrumental during prioritization, planning, and design of applications on multiple simultaneous projects</li>
    <li>Worked closely with business partners and business analysts to help gather requirements and providing design input</li>
    <li>Managed teams working on back-end, customer critical application development projects</li>
    <li>Worked on development team to deliver Pega PRPC applications resulting in savings of $450K+ yearly</li>
    <li>Trained and mentored developers new to Pega PRPC to ensure an understanding of best practices and standards</li>
    </ul>
    </div>
    </section>
    </div>
</section>
    {/* End of WORK EXPERIENCE block. */}
    {/* ******************  EDUCATION & CERTIFICATIONS ****************** */}
<section className="education">
        <div className="content-wrap item-details">
        <h2>Education &amp; Certifications</h2>
        <section>
        <h3>Certifications</h3>
        <p>Pega PRPC CSSA (2011)</p>
    <p>Pega PRPC CSA (2011)</p>
    </section>
    <section>
    <h3>DeVry University - Columbus, OH</h3>
    <p>Bachelor of Science in Computer Engineering Technology, (6/09)</p>
    <ul>
    <li>Dean's Scholarship</li>
    </ul>
    </section>
    </div>
    {/* End of EDUCATION & CERTIFICATIONS block. */}
</section>
    {/* *****************  CONTACT INFO / SOCIAL MEDIA  ***************** */}
<footer>
    <div className="content-wrap">
        <h2>Let's Keep in Touch!</h2>
    {/* Social media and contact links. Add or remove any networks. */}
<ul className="contact-list">
        <li><a href="mailto:joshua.j.singer79@gmail.com">Email</a></li>
    -<li><a href="http://www.joshuajsinger-se.com/resume" target="_blank" rel="noopener noreferrer">Resume</a></li> -
    <li><a href="https://www.linkedin.com/in/joshua-j-singer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    </ul>
    </div>
    </footer>
    </main>
    </div>
  );
}


export default App;
