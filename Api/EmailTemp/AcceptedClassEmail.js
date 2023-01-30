const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const AcceptedClassEmail = async (tutorFullname, email, classDetails) => {
  const msg = {
    to: email,
    from: "donotreply@klasshour.com", // Use the email address or domain you verified above
    subject: "Your Scheduled Class 🎉🎉",
    text: "Klasshour",
    html: `
    <p>Your Class has been scheduled.  </p>
    <p>The name of your tutor is ${tutorFullname}</p>
    <p>Your class has being scheduled to hold ${new Date(
      classDetails.startTime
    ).toLocaleString()}</p>
    <p>You can join the class via this link <b><a href=${
      classDetails.classLink
    }>Test link</a></b></p>
    <p>Stay tuned</p>
    <p> <i>Klasshour Teams.</i> </p>
    `,
  };

  let result = await sgMail.send(msg).then(
    () => {
      return true;
    },
    (error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
        return false;
      } else {
        return true;
      }
    }
  );
  return result;
};

module.exports = AcceptedClassEmail;
