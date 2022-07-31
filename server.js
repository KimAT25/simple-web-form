require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const nodeMailerLyb = require('./js/nodemailer-service');

const port = process.env.PORT || 3002;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './')));

app.post('/send', async (req, res) => {
    const { name, email, description } = req.body;
    try {
        await nodeMailerLyb.sendEmail(name, email, description);
        res.send('Message Successfully Sent!');
    } catch (error) {
        res.send('Message Could not be Sent');
    }
});

app.listen(port, () => console.log(`Listening to requests on http://localhost:${port}`));

