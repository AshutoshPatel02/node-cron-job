const express = require('express');
const customCron = require('./cron');
const app = express();


customCron.testCron();

app.get('/', (req, res) => {
    res.send('I am a server!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});

