var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alaa.rabai@gmail.com',
    pass: 'ismailou53'
  }
});

module.exports = {
    transporter
}