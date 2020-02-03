import React from "react";

const techExpertiseList = {
    languages: ['Javascript', 'SQL', 'HTML/XML', 'JSON', 'Java', 'C++'],
    frameworks: ['Node.js', 'Express', 'React', 'Pega PRPC (8.2,7.3,6.1,5.5)', 'Pega Mobile'],
    software: ['Git', 'Intellij', 'AWS Cloud9', 'Oracle SQL Developer', 'Postman', 'Splunk', 'Jenkins', 'JIRA', 'SVN'],
    servers: ['AWS', 'Tomcat', 'Websphere'],
    databases: ['Oracle', 'Mongo', 'Postgres', 'DB2']
};

const TechExpertiseSection = () => {
    let capFirst = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return (
        <section className="tech-expertise">
            <div className="content-wrap item-details divider">
                <h2>Technical Expertise</h2>
                <div>
                    { Object.keys(techExpertiseList).map( (tech, i) => (
                        <div className="tech-grid" key={i}>
                            <p className="tech">{ capFirst(tech) }</p>
                            <p>{ techExpertiseList[tech].join(', ') } </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default TechExpertiseSection;
