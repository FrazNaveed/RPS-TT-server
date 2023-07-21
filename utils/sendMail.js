require('dotenv').config();
const nodemailer = require('nodemailer');
const { GeneratePassword } = require('./generatePassword');

const SendEmail = (email) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
  const password = GeneratePassword();
  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: email,
    subject: 'Your Password for login',
    text: `Password: ${password}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { SendEmail };
