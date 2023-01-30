const sgMail = require('@sendgrid/mail');
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SignUpEmailTemp = async (fullname, email, otpcode)=>{

    const msg = {
    to: email,
    from: 'donotreply@klasshour.com', // Use the email address or domain you verified above
    subject: "Klasshour Account Verification",
    text: "Klasshour",
    html: `
    <p> Hello ${fullname}</p>
    <p>Welcome to Klasshour, your account verification is ${otpcode}</p>
    `,
    };

    let result = await sgMail.send(msg)
      .then(() => {
        return true
      }, error => {console.error(error);
        if (error.response) {
            console.error(error.response.body)
            return false
        }else{
            return true
        }
    });
    return result
}

module.exports = SignUpEmailTemp