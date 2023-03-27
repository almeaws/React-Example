const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(stripesecret1+stripesecret2);

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response)=> response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=>{
  const total =request.query.total;
  console.log("payment request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
