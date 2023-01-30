const sgMail = require('@sendgrid/mail');
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const  ResetPwdEmailTemp = async (fullname, email, resetUrl)=>{

    const msg = {
    to: email,
    from: 'donotreply@klasshour.com', // Use the email address or domain you verified above
    subject: "Klasshour Password reset",
    text: "Klasshour",
    html: `
    <p> Hello ${fullname}</p>
    <p>You initiated password reset, you can find click on the link below to continue</p>
    <p>Please ignore this mail or report this activiy if you didnt initiate this process.</p>
    <p><a href=${resetUrl}>Reset Link</a></p>
    `,
    };

     try {
      let result = await sgMail.send(msg);
      if(result) return true
   } catch (error) {
      console.log(error)
      return false
   }

}

module.exports = ResetPwdEmailTemp