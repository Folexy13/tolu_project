const express = require("express");
const mongoose = require("mongoose");
const reel = require("node-reel-cron");
const cookieParser = require("cookie-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
// const MerithubToken = require("./Model/systemModel/tokenModel");
const app = express();
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const clientRoutes = require("./Routes/clientRoutes");

// const connection_string = process.env.CONNECTION_STRING_LIVE;
const connection_string = process.env.CONNECTION_STRING_DEV;
const PORT = process.env.PORT || 4000;
mongoose.set("strictQuery", false);
//create connection to mongodb database
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // Start server only if connected to database
  .then(() => {
    app.listen(PORT, async () => {
      console.log(process.env.CLIENT_VERSION_ONE);
      console.log("Api server started on port", PORT);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });

//=================Server settings ==================
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send({ message: "Server is Live" });
});

reel()
  .call(() => {
    //  refresh  every 15 minutes
    console.log("It's five minute now");
  })
  .everyFiveMinutes()
  .run();

//server routes
app.use(clientRoutes);
// app.use(adminRoutes);
