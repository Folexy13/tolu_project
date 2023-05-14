const express = require("express");
const mongoose = require("mongoose");
const reel = require("node-reel-cron");
const cookieParser = require("cookie-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const axios = require("axios");
const StockModel = require("./Model/stock.model");
const email = require("./EmailTemp/AcceptedClassEmail")

// const MerithubToken = require("./Model/systemModel/tokenModel");
const app = express();
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const clientRoutes = require("./Routes/clientRoutes");

// const connection_string = process.env.CONNECTION_STRING_LIVE;
const connection_string = process.env.CONNECTION_STRING_DEV;
const PORT = process.env.PORT || 4000;
let outOfThreshold = [];

const CheckInventory = async () => {
  const stocks = await StockModel.find();
  const now = new Date();
  const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0).toISOString();
  // Calculate the time difference between now and the event date
  const diffMs = now - eventDate;
  // Convert the time difference to hours
  const diffHours = diffMs / (1000 * 60 * 60);
  if (diffHours > 24) {
    await email('folajimiopeyemisax13@gmailcom', stocks.length);
  } 

  // Filter stocks based on threshold and quantity
  const filteredStocks = stocks.filter(stock => stock.threshold >= stock.quantity);

  // Push only new stocks to outOfThreshold array
  filteredStocks.forEach(stock => {
    const objectExists = outOfThreshold.find(item => item._id === stock._id);
    if (!objectExists) {
      outOfThreshold.push(stock);
    }
  });
};



CheckInventory();
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
app.post("/api/v1/webhook", async (req, res) => {
  console.log("Webhook data received:", req.body);
  // Perform any necessary actions based on data received
  res.send({
    msg: "Webhook received successfully",
    data: outOfThreshold,
  });
});

reel()
  .call(async () => {
    //  refresh  every 15 minutes
  await CheckInventory()
    axios
      .post("https://tolu-api.onrender.com/api/v1/webhook", {})
      .then((res) => {
        console.log("Webhook called successfully");
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error calling webhook:", error);
      });
    console.log("It's five minute now");
  })
  .everyMinute()
  .run();

//server routes
app.use(clientRoutes);
// app.use(adminRoutes);
