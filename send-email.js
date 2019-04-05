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

// get new access token
const accessToken = oauth2Client.getAccessToken();
// create how we want to send the email using smtp and OAuth2
var smtpTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
    user: 'GSCookieSwap@gmail.com',
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken,
    accessToken: accessToken
  },
  tls:{
      rejectUnauthorized: false
  }
});

// email content 
var mailOptions = {
  from: 'GSCookieSwap@gmail.com',
  to: emailAddr,
  subject: emailSubj,
  text: emailBody
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};
// send the email
smtpTransporter.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransporter.close();
});
};
sendEmail("chongvlee@hotmail.com","Sending Email using Node.js","Testing, Testing");