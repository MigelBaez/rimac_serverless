'use strict';

const request  = require('request');
const url = process.env.API_ENDPOINT;

module.exports.getAll = (event, context, callback) => {
  console.log(url)
  const options = { 
    method: 'GET',
    url: url +'planets',
    headers: 
     { 
       'Content-Type': 'application/json'
     }}

     request (options, function (error, response, body) {
      callback(null , {
          statusCode : 200 ,
          body
      })
  });

};
