const nodemailer = require('nodemailer');
const util = require('util');
require('dotenv').config();

const SendEmail = async (email, password) => {
  try {
    const transporter = nodemailer.createTransport({
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

    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: 'Welcome!',
      text: `Your password for login is: ${password}`,
    };
    const sendMailAsync = util.promisify(transporter.sendMail.bind(transporter));
    const info = await sendMailAsync(mailOptions);
    return info.response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { SendEmail };
