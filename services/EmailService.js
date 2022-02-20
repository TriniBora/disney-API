const sgMail = require("@sendgrid/mail");

// This function returns a promise that sends an email confirmation to the user
const sendConfirmationEmail = async (payload) => {
  // Destructuring the payload
  const { email, username } = payload;

  // Setting the sengrid api key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Setting the email content
  const msg = {
    to: `${username} <${email}>`,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Confirmation email",
    text: `Hello ${username}, your account has been created.`,
    html: `<strong>Hello ${username}, your account has been created.</strong>`,
  };

  return sgMail.send(msg);
};

module.exports = sendConfirmationEmail;
