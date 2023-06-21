const nodemailer = require('nodemailer');



exports.handler = async function (event) {
  const { name, email, message } = event.body;
  console.log(event.body);

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'watts.e.michelle@gmail.com',
      pass: 'xgcejfzenjyavvof'
    },
  });
  
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
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return {
        statusCode: 200,
        body: 'Email sent successfully'
      }
    } else {
      return {
        statusCode: 500,
        body: 'An error occurred while sending the email'
      }
    }
  });

  console.log(`Email sent to ${name}`);
};