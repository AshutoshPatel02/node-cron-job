const express = require('express');
const fs=require('fs')
const cron=require('node-cron')

const app = express();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
    fs.appendFileSync('test.txt', 'running a task every hour\n', 'utf8', (err) => {
        if (err) throw err;
        console.log('The data was successfully appended to file!');
    });
});