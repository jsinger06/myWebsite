import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;

const collection = 'resume';

const workExperienceFactory = (company) => ({
    company: company,
    roles: [],
    jobDescription: {
        description: '',
        accomplishments: []
    },
});

const resumeData = async() => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('myWebsite');
        const data = await db.collection(collection).find().toArray();

        let companies = [];
        let workExperience = {};

        // Build Work experience section
        data.forEach(item => {
            // Create object containing all companies
            let obj = {};
            if (item.company != null && typeof item.company != 'undefined' && !companies.includes(item.company)) {
                companies.push(item.company);
                obj[item.company] = workExperienceFactory(item.company);
            }
            else {
                obj[item.company] = workExperience[item.company]
            }

            // Build out work experience object
            if (item.category === 'tenure') {
                obj[item.company].roles.push({ title: item.jobRole, dates: item.value });
            }
            else if (item.category === 'jobDescription') {
                obj[item.company].jobDescription.description = item.value;
            }
            else if (item.category === 'accomplishment') {
                obj[item.company].jobDescription.accomplishments.push(item.value)
            }

            if (Object.keys(obj) != 'undefined') {
                workExperience[item.company] = obj[item.company]
            }

        });

        const resultObj = {
            accomplishmentsList: [],
            strengthList: [],
            certificationsList: [],
            techExpertiseList: { languages: [], frameworks: [], software: [], servers: [], databases: [] },
            workExperienceList: Object.values(workExperience)
        };

        // Build remaining sections
        data.reduce((acc, item) => {

            let section = null;

            switch (item.category) {
                case 'keyAccomplishment':
                    section = 'accomplishmentsList';
                    break;
                case 'strength':
                    section = 'strengthList';
                    break;
                case 'cert':
                    section = 'certificationsList';
                    break;
                case 'tech':
                    acc.techExpertiseList[item.subCategory].push(item.value);
                    break;
            }

            section !== null ? acc[section].push(item.value) : 'section not found';

            return acc;
        }, resultObj);

        return resultObj;
    }
    catch (error) {
        return { error: error }
    }
};


/*
const resumeData = {
    certificationsList: ["Pega PRPC CSSA (2016)", "Pega PRPC CSA (2011)"],
    accomplishmentsList: [
        'Designed and implemented production performance tracking tool for Pega Mobile giving development team nsights into real world performance',
        'Implemented security improvements to meet end of year objectives in less than 3 months',
        'Fixed production defect that eliminated approximately 240 hours of weekly employee rework and negative customer experiences',
        'Led development team tasked with building an application to manage LOB tax documentation for Fortune 500 Financial Services company',
        'Identified opportunity to reduce redundant API from 14,000 service calls to less than 50 service calls per day minimizing network traffic and failure points'
    ],
    techExpertiseList: {
        languages: ['Javascript', 'SQL', 'HTML/XML', 'JSON', 'CSS', 'Java', 'C++'],
        frameworks: ['Node.js', 'Express', 'React', 'Pega PRPC (8.2,7.3,6.1,5.5)', 'Pega Mobile'],
        software: ['Git', 'Intellij', 'AWS Cloud9', 'Oracle SQL Developer', 'Postman', 'Splunk', 'Jenkins', 'JIRA', 'SVN'],
        servers: ['AWS', 'Tomcat', 'Websphere'],
        databases: ['Oracle', 'Mongo', 'Postgres', 'DB2']
    },
    strengthList: [
        'Focused on Customers',
        'Persuade Stakeholders',
        'Building Relationships',
        'Translate Between Business & Technical',
        'Train / Mentor Team Members',
        'Partner with Engineers',
        'Quick Learner',
        'Drive Results',
        'Diagnose / Solve Complex Problems'
    ],
    workExperienceList: [{
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
    }]
}
*/

export default resumeData;
