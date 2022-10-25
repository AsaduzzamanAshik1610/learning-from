const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('learning API Runing');
});

app.listen(port, ()=>{
    console.log('learning server side', port);
});
