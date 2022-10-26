const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;
app.use(cors());
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
