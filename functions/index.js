const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const stripe = require("stripe")('sk_test_51KWPKCSHHtnpXhv56yLw8en90NiGlOpXi1fEZUKSgFTPCxoOG3nbyR3MCEkkN1ruBaj0Ux3VUsZR44Klm8O7uEou00ekxbbtIn')


// API 

//-App config
const app = express();


//-Middlewares
app.use(cors({origin: true}));
            
app.use(express.jason());

        //-API routes
app.get('/',(request,respons)=> res.status(200).send('hello world'))
        //-Listen command

        exprss.api = functions.https.onRequest(app)