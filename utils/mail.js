require("dotenv").config();
const mailjet = require("node-mailjet").connect(
  process.env.MAIL_JET_API_KEY,
  process.env.MAIL_JET_SECRET_KEY
);

//generating otp
exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i < 4; i++) {
    const randVal = Math.round(Math.random() * 9);
    otp = otp + randVal;
  }
  return otp;
};

//mail sender aoi
exports.mailSender = (to, subject, text, html) => {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAIL_JET_EMAIL,
          Name: "BestWishes",
        },
        To: [to],
        Subject: subject,
        TextPart: text,
        HTMLPart: html,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};
