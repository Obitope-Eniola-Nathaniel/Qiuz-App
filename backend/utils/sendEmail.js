const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.EMAIL_HOST,
      // port: parseInt(process.env.EMAIL_PORT),
      host: process.env.EMAIL_HOST,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const sentInfo = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log("✅ Email sent:", sentInfo.messageId);
  } catch (err) {
    console.log("error from send mail", err.message);
    console.error(err);
  }
};

module.exports = sendEmail;
