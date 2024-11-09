function toggleNav() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}



const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // or any email service you're using
        auth: {
            user: 'ankit2k04@gmail.com', // your email
            pass: 'Ankit_2004' // your password (consider using environment variables)
        }
    });

    let mailOptions = {
        from: email,
        to: 'ankit2k04@gmail.com',
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully!');
    } catch (error) {
        res.send('Error sending email: ' + error.message);
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
