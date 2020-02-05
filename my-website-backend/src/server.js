import express from 'express';
import path from 'path';
import resumeData from './data/resume';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/resume', (req, res) => {
    console.log('received resume');
    res.status(200).json(resumeData);
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.get('*', (req, res) => {
    console.log('redirect')
    // res.redirect(301, '/resume')
    res.redirect(301, '/resume')
})

// AWS Cloud 9 can only preview ports 8080, 8081, and 8082
// Example Preview: https://2ac254789e6d4dcfb9c2be8a67df610d.vfs.cloud9.us-east-2.amazonaws.com:8081/
app.listen(8081, () => console.log('listening on port 8081'));
