require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'rs.mahra4546@gmail.com', 
    to: 'rs.mahra4546@gmail.com',
    subject: 'Nodemailer - Test',
    text: 'HEY, I AM JUST SENDING THIS MESSAGE TO TEST MY API'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return console.log('Error occurs', err);
    }
    else
    return console.log('Email sent!!!');
    
});