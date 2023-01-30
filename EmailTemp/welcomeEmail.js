const sgMail = require('@sendgrid/mail');
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const WelcomeEmail = async (fullname, email)=>{

    const msg = {
    to: email,
    from: 'donotreply@klasshour.com', // Use the email address or domain you verified above
    subject: "Klasshour - Congratulations 🎉🎉",
    text: "Klasshour",
    html: `
    <p>Congratulations ${fullname} 🎉🎉</p>
    <p>Your account has been verified successfully.
    <p>Welcome to Klasshour, You can proceed to <b><a href="https://app.klasshour.com/login">Login</a></b>
    to enjoy the platform awesome features.
    </p>
    </p>
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

module.exports = WelcomeEmail