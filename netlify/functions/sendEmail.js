const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'watts.e.michelle@gmail.com',
      pass: 'xgcejfzenjyavvof'
    },
  });

exports.handler = async function (event) {
  const { name, email, message } = event.body;
  console.log(`Sending email to ${name}`);

  // Define the email options
  const mailOptions = {
    from: 'watts.e.michelle@gmail.com',
    to: 'watts.e.michelle@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  console.log(`Email sent to ${name}`);
};