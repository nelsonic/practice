// testing sending email for: https://github.com/ideaq/time/issues/85
var nodemailer = require('nodemailer');
var fs         = require('fs');
var template   = fs.readFileSync('./email_html_template.html', 'utf8')
var textonly   = fs.readFileSync('./email_text_template.txt', 'utf8')
// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'welcome.to.dwyl@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

var email = function(person, callback){
    var mailOptions = {
        from: 'hello@dwyl.io <hello@dwyl.io>', // sender address
        to: person.email, // list of receivers
        subject: 'Welcome to dwyl!', // Subject line
        text: textonly, // plaintext body
        html: template
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        // console.log(error, info);
        callback(error, info)
    });

}

var recipient = {
    email : 'dwyl.smith@gmail.com',
    name  : 'FirstName'
}

email(person, function(error,info){
    console.log(error, info);
})