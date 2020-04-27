'use strict';

const request  = require('request');
const axios = require('axios');
const url = process.env.API_ENDPOINT;
module.exports.getAll = async (event, context, callback) => {

  let response = await axios.get(url +'planets'); 
  let planets = response.data.results;
  let planetsDto = []
  planets.forEach(element => 
   { 
     var planet = 
     {
       nombre : element.name, 
       periodo_rotacion : element.rotation_period,
       periodo_orbital : element.orbital_period,
       diametro : element.diameter,
       clima : element.climate,
       gravedad : element.gravity,
       terreno : element.terrain,
       superficie_agua: element.surface_water,
       poblacion : element.population


      }
    planetsDto.push(planet)}
    );

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(planetsDto),
  });

};
