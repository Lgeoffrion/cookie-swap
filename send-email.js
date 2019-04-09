require("dotenv").config();
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

function sendEmail(emailAddr,emailSubj,emailBody){
// set up OAuth client
const oauth2Client = new OAuth2(
  process.env.clientId, // ClientID
  process.env.clientSecret, // Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.refreshToken
});

// get new access token using the refresh token
const accessToken = oauth2Client.getAccessToken();
// create how we want to send the email using smtp and OAuth2
var smtpTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
    user: 'GSCookieSwap@gmail.com',
    clientId: process.env.clientId,  // client ID that you get from google api
    clientSecret: process.env.clientSecret, // client secret that you get from google api
    refreshToken: process.env.refreshToken, // refresh token that you get from google api
    accessToken: accessToken 
  },
  tls:{
      rejectUnauthorized: false
  }
});

// email content 
var mailOptions = {
  from: 'GSCookieSwap@gmail.com',
  to: emailAddr,        // email addresses to send email
  subject: emailSubj,   // subject line in the email
  text: emailBody       // the email body
          
};
// send the email
smtpTransporter.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransporter.close();
});
};
module.exports = sendEmail;
