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

        const resultObj = {
            accomplishmentsList: [],
            strengthList: [],
            certificationsList: [],
            techExpertiseList: { languages: [], frameworks: [], software: [], servers: [], databases: [] },
            workExperienceList: {}
        };

        // Build Work experience section
        data.forEach(item => {
            // Create object containing all companies
            let obj = {};
            if (item.company != null && typeof item.company != 'undefined' && !companies.includes(item.company)) {
                companies.push(item.company);
                obj[item.company] = workExperienceFactory(item.company);
            }
            else {
                obj[item.company] = workExperience[item.company];
            }

            // Build out work experience object
            switch (item.category) {
                case 'accomplishment':
                    obj[item.company].jobDescription.accomplishments.push(item.value);
                    break;
                case 'jobDescription':
                    obj[item.company].jobDescription.description = item.value;
                    break;
                case 'tenure':
                    obj[item.company].roles.push({ title: item.jobRole, dates: item.value });
                    break;
            }

            if (Object.keys(obj) != 'undefined') {
                workExperience[item.company] = obj[item.company];
            }
        });

        resultObj.workExperienceList = Object.values(workExperience);

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

export default resumeData;
