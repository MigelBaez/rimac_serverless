'use strict';

const request  = require('request');


module.exports.getAll = (event, context, callback) => {
  const options = { 
    method: 'GET',
    url: 'https://swapi.py4e.com/api/planets',
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
