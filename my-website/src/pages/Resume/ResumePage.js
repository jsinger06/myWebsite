import React, { useState, useEffect } from 'react';
import './resumePage.css';
import AccomplishmentsSection from './Sections/AccomplishmentsSection';
import StrengthListSection from './Sections/StrengthSection';
import WorkExperienceSection from './Sections/WorkExperienceSection';
import TechExpertiseSection from './Sections/TechExpertiseSection';
import EducationCertificationsSection from './Sections/EducationCertificationsSection';

function App() {

    const [body, setBody] = useState({ certificationsList: [] });

    useEffect(() => {
        const fetchResumeData = async() => {
            const result = await fetch(`/api/resume`);
            const body = await result.json();
            setBody(body);
        };

        fetchResumeData();
    }, []);

    return (
        <div>
            <main>
                {/* ***********************  ABOUT / PROFILE  *********************** */}
                <header>
                    <div className="content-wrap">
                        <h1>Joshua Singer</h1>
                        <h2>Senior Software Engineer</h2>
                        <StrengthListSection strengthList = { body.strengthList }/>
                    </div>
                </header>
                {/* ***********************  Key Accomplishments  *********************** */}
                <AccomplishmentsSection accomplishmentsList={ body.accomplishmentsList }/>
                {/* ***********************  Technical Expertise  *********************** */}
                <TechExpertiseSection techExpertiseList= { body.techExpertiseList }/>
                {/* ***********************  WORK EXPERIENCE  *********************** */}
                <WorkExperienceSection workExperienceList = { body.workExperienceList }/>
                {/* ******************  EDUCATION & CERTIFICATIONS ****************** */}
                <EducationCertificationsSection certificationsList={ body.certificationsList }/>
                {/* *****************  CONTACT INFO / SOCIAL MEDIA  ***************** */}
                <footer>
                    <div className="content-wrap">
                        <h2>Let's Keep in Touch!</h2>
                        {/* Social media and contact links. */}
                        <ul className="contact-list">
                            <li><a href="https://www.linkedin.com/in/joshua-j-singer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="mailto:joshua.j.singer79@gmail.com">Email</a></li>
                            <li><a href="http://www.joshuajsinger-se.com/resume" target="_blank" rel="noopener noreferrer">Resume Web</a></li>
                        </ul>
                    </div>
                </footer>
            </main>
        </div>
    );
}


export default App;
