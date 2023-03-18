const cron=require('node-cron')
const fs=require('fs')

const testCron = async () => {
    try{
        cron.schedule('* * * * * *', () => {
            console.log('running a task every minute');
            fs.appendFileSync('test.txt', 'running a task every hour', 'utf8', (err) => {
                if (err) throw err;
                console.log('The data was successfully appended to file!');
            });
        });
    }catch(err){
        connsole.log(err);
    }
}

module.exports.testCron = testCron;