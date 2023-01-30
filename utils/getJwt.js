const jwt = require('jsonwebtoken');
const fetch = require("node-fetch");
require("dotenv").config();

function getJwt(){
    const payload = JSON.stringify({
        iss: process.env.MERITHUB_CLIENT_ID,
        aud: `https://serviceaccount1.meritgraph.com/v1/${process.env.MERITHUB_CLIENT_ID}/api/token`,
        expiry: 3600
    })
    const merithubJwt = jwt.sign(payload, process.env.MERITHUB_CLIENT_SK)
   return merithubJwt;
}


async function getToken(assertion) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append('grant_type','urn:ietf:params:oauth:grant-type:jwt-bearer')
    urlencoded.append('assertion','Bearer '+assertion)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:urlencoded
    };
     const response = await fetch(`https://serviceaccount1.meritgraph.com/v1/${process.env.MERITHUB_CLIENT_ID}/api/token`, requestOptions)
     const result = await response.text()
     return JSON.parse(result).access_token
   
}

module.exports = {getJwt, getToken}