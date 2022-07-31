const nodemailer = require('nodemailer');

async function sendEmail(name, email, description) {
    console.log(name, email, description);
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })
    const mailOption = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `send from nodemailer form`,
        text: `You got a message from
               Name: ${name}
               Email : ${email}
               Message: ${description}`,
    };
    try {
        console.log(mailOption);
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = { sendEmail };
