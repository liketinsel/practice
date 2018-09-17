var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'liketinsel@gmail.com',
    pass: 'nthhbghfnxtnn'
  }
});

var mailOptions = {
  from: 'liketinsel@gmail.com',
  to: 'liketinsel@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});