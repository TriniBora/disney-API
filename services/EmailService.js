const sgMail = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");

const sendConfirmationEmail = async (payload) => {
  const { email, username } = payload;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: `${username} <${email}>`,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Confirmation email",
    text: `Hello ${username}, your account has been created.`,
    html: `<strong>Hello ${username}, your account has been created.</strong>`,
    mail_settings: {
      sandbox_mode: { enable: false },
    },
  };
  return sgMail.send(msg);
};

module.exports = sendConfirmationEmail;
