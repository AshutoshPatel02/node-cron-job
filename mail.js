const nodemailer = require('nodemailer');

const sendMail = async () => {
    console.log('sendMail');
    try{   
        // let testAccount = await nodemailer.createTestAccount();
        // 1) Create a transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.google.com',
            port: 587,
            secure: true,
            service:"gmail",
            auth: {
                user: '9919004378@klu.ac.in',
                pass: '9919004378'
            }
        });

        // 2) Define the email options
        const mailOptions = {
            from: 'Node Mailer <9919004378@klu.ac.in>',
            to: 'coderashu028@gmail.com, imposteralchemist@gmail.com',
            subject: 'Node Cron Test Mail',
            text: 'Hole popat ho gaa re',
            html: '<h1>Node Cron Test Every Hour</h1>'
        };

        // 3) Actually send the email
        await transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                throw err;
            } else {
                console.log('Email sent!!! :'+data.response);
            }
        });
    }catch(err){
        console.log(err.message);
    }
};

module.exports = {sendMail};