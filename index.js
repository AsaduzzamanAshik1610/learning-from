const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const courses = require('./data/courses.json')

app.get('/', (req, res)=>{
    res.send('learning API Runing');
});

app.get('/regular-courses', (req, res)=>{
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('learning server side', port);
});
