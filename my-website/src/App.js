import React from 'react';
import './App.css';
import AccomplishmentsSection from "./pages/Resume/AccomplishmentsSection";
import StrengthListSection from "./pages/Resume/StrengthSection";
import WorkExperience from "./pages/Resume/WorkExperienceSection";

function App() {
    return (
        <div>
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
                <AccomplishmentsSection />
    {/* ***********************  WORK EXPERIENCE  *********************** */}
                <WorkExperience />
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
