import nodemailer from 'nodemailer';
function sendMailAPI(email, password) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohitpatidar7326@gmail.com',
      pass: 'lbydyvqhxweqmrsb',
    },
  });

  const VerificationLink = `http://localhost:3000/login`;
  var mailOptions = {
    from: 'rohitpatidar7326@gmail.com',
    to: email,
    subject: 'Verification mail',
    html: `<h1>Welcome to MyApp</h1>
  <p>You have successfully registered for our app. Your login credentials are attached below:</p>
  <h2>Email: ${email}</h2>
  <h2>Password: ${password}</h2>
  <p>Click the link below to verify your email:</p>
  <a href="${VerificationLink}">Verify Email</a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default sendMailAPI;
