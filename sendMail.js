const nodemailer=require("nodemailer");


const msg={
    from:"rameshredddy@gmail.com",
    to:"9919004378@klu.ac.in,coderashu028@gmail.com",
    subject:"Node Cron Test Mail",
    text:"Hole popat ho gaa re",
    html:"<h1>hi from node cron</h1>"
};

nodemailer.createTransport({
    host:"smtp.google.com",
    service:"gmail",
    port:465,
    auth:{
        user:"9919004378@klu.ac.in",
        pass:'9919004378'
    }
}).sendMail(msg,(err,data)=>{
    if(err){
        throw err;
    }else{
        console.log("Email sent!!! :"+data.response);
    }
});

