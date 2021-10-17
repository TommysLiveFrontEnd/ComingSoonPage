require('dotenv').config();
const { info } = require('autoprefixer');
const { text } = require('express');
const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000

//middleware 
app.use(express.static('app'));
app.use(express.json())

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/app/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)



    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_ID,
        to: req.body.email, 
        subject: 'Thanks For Signing Up: Stay Tuned',
        text: 'Hello from Andrews Attire, look out for item drops and website updateds via our social media'
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

