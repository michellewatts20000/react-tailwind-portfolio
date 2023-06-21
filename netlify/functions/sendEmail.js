const nodemailer = require('nodemailer');
const { promisify } = require('util');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'watts.e.michelle@gmail.com',
    pass: 'xgcejfzenjyavvof'
  }
});

exports.handler = async function (event) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    console.log(`Sending email to ${name}`);
  
    const sendMailAsync = promisify(transporter.sendMail).bind(transporter);
  
    const mailOptions = {
      from: 'watts.e.michelle@gmail.com',
      to: 'watts.e.michelle@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };
  
    await sendMailAsync(mailOptions);
  
    console.log(`Email sent to ${name}`);
  
    return {
      statusCode: 200,
      body: 'Email sent successfully'
    };
  } catch (error) {
    console.error(error);
  
    return {
      statusCode: 500,
      body: 'An error occurred while sending the email'
    };
  }
};
