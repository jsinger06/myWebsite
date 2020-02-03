import React from 'react';
import './App.css';
import AccomplishmentsSection from './pages/Resume/AccomplishmentsSection';
import StrengthListSection from './pages/Resume/StrengthSection';
import WorkExperienceSection from './pages/Resume/WorkExperienceSection';
import TechExpertiseSection from './pages/Resume/TechExpertiseSection';
import EducationCertificationsSection from './pages/Resume/EducationCertificationsSection';

function App() {
    return (
        <div>
            <main>
            {/* ***********************  ABOUT / PROFILE  *********************** */}
                <header>
                    <div className="content-wrap">
                        <h1>Joshua Singer</h1>
                        <h2>Senior Software Engineer</h2>
                        <StrengthListSection />
                    </div>
                </header>
    {/* ***********************  Key Accomplishments  *********************** */}
                <AccomplishmentsSection />
    {/* ***********************  Technical Expertise  *********************** */}
                <TechExpertiseSection />
    {/* ***********************  WORK EXPERIENCE  *********************** */}
                <WorkExperienceSection />
    {/* ******************  EDUCATION & CERTIFICATIONS ****************** */}
                <EducationCertificationsSection />
    {/* *****************  CONTACT INFO / SOCIAL MEDIA  ***************** */}
                <footer>
                    <div className="content-wrap">
                        <h2>Let's Keep in Touch!</h2>
                        {/* Social media and contact links. */}
                        <ul className="contact-list">
                            <li><a href="mailto:joshua.j.singer79@gmail.com">Email</a></li>
                            - <li><a href="http://www.joshuajsinger-se.com/resume" target="_blank" rel="noopener noreferrer">Resume</a></li> -
                            <li><a href="https://www.linkedin.com/in/joshua-j-singer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </footer>
            </main>
        </div>
    );
}


export default App;
