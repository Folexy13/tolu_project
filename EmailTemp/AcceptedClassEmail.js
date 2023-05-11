const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const AcceptedClassEmail = async (email,quantity) => {
  const msg = {
    to: email,
    from: "Customer Support<folajimiopeyemisax13@gmail.com>", // Use the email address or domain you verified above
    subject: "Stock need to be re-ordered ASAP!!!",
    text: "Urgent!!",
    html: `
    <p>${quantity} Stock item(s) need to be restocked as they have exceeded thier threshold limit.  </p>
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
