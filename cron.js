const cron=require('node-cron')
const mailer = require('./mail');

const testCron = async() => {
    try{
        cron.schedule('0 * * * *', () => {
            console.log('running a task every HOUR');
            mailer.sendMail();
        });
    }catch(err){
        connsole.log(err);
    }
}

module.exports = {testCron};