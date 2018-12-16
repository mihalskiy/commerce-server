const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config();

module.exports = {
    mail (user, text) {
        const transporter = nodemailer.createTransport(smtpTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        }));

        const mailOptions = {
            from: user,
            to: process.env.MAIL_USER,
            subject: 'Sending Email using Node.js[nodemailer]',
            text: user + 'Sending Email: - '+ text
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(user, text, error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }
}

