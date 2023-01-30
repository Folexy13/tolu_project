const sgMail = require('@sendgrid/mail');
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


async function SendMail(mailto, subject, mailTemp){
    console.log("mail content", mailTemp)
const msg = {
  to: mailto,
  from: 'donotreply@klasshour.com', // Use the email address or domain you verified above
  subject: subject,
  text: "",
  html: `${mailTemp}`,
};
let result = await sgMail.send(msg)
      .then(() => {}, error => {console.error(error);
        if (error.response) {
            console.error(error.response.body)
            return false
        }else{
            return true
        }
    });

    return result
}

module.exports = SendMail;