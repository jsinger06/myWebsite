import React from "react";

/*const certificationsList = ['Pega PRPC CSSA (2016)', 'Pega PRPC CSA (2011)'];*/

const EducationCertificationsSection = ({ certificationsList }) => (
    <section className="education">
        <div className="content-wrap item-details">
            <h2>Education &amp; Certifications</h2>
            <section>
                <h3>Certifications</h3>
                <ul>
                    { certificationsList.map( (cert, key) => (
                        <li key={key}>{cert}</li>
                    ))}
                </ul>
            </section>
            <section>
            <h3>DeVry University - Columbus, OH</h3>
            <p>Bachelor of Science in Computer Engineering Technology, (6/09)</p>
            <ul>
                <li>Dean's Scholarship</li>
            </ul>
            </section>
        </div>
    </section>

);

export default EducationCertificationsSection;
