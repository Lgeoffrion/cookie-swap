# Project 3 - Girl Scout Cookie Swap

During Girl Scout Cookie season, a cookie manager is always looking at their inventory to make sure that they can sell all the cookies before the end of selling season.  If troops don't think they can sell all their inventory, they need to determine how many boxes of cookies they need to send to other troops so they don't have to pay for the cookies they can't sell. They work with these troops to meet up and transfer cookies to the other troops. The local council has a swap app, but it is not very useful and many troops don't use it. The service unit uses google spreadsheet and the service unit manager doesn't know when there is a swap.  So if the troops don't transfer the cookies in the ABC Cookie system, their numbers will be off at the end of cookie season and it is harder to reconcile these issues. 

This app facilitates the swap between troops and keeps the service unit manager in the loop in case there are descrepancies at the end of the season.  

The app admin will add the Service Unit Manager, SUM, into the SUM table and then the SUM can add the troops in their service unit.  Once the SUM adds the troop, the app will send out an email to the troop cookie manager, TCM, that an account has been created for them and please go in and change their password.  

Once the TCM logs in and updates their password, they can add cookies to their inventory, let others know by putting up their cookies for swap, or remove cookies from their inventory.  The TCM can also update their profile and see all their swaps.  They also have a view of all the available cookies if they need any and can claim the cookies for their troop.  Once they click the claim button, an email is sent to the other troop to let them know there is an interested taker and to contact that person.

## Links

- Deployment page: https://gs-cookie-swap.herokuapp.com/
- Repository: https://github.com/cvanglee/cookie-swap

## Installing / Getting started

This application doesn't require any other installation for a user.

## Initial Configuration

Before starting development of this application, we needed to npm install express, dotenv, express-session, googleapis, mysqul2, moment, if-env, mysql, nodemailer, passport, path and sequelize packages. We created the database on jawsDB and deployed to Heroku.

## Service Unit Manager user name and password

You will need a service unit manager login to be able to run this app.  We are using email address as the username.

username : JA@gmail.com
password : password1


## Things that worked well

A couple of things that worked well for us are listed below.

* nodemailer was fairly easy to implement and use - code snippet below

## Running the tests

We ran tests creating a TCM, updating the profile, adding inventory, removing inventory, putting inventory up for swap, changing the user's password, and making sure emails are being generated and sent out.

## Code Snippet

* Code Snippet 1
```
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
```

## Built With
* react
* Materialize
* nodemailer
* express
* moment
* sequelize
* passport
* googlapis
