'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();



function addCliente(cliente){
   
    const timestamp = new Date().getTime();  
  
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
          id: uuid.v1(),
          nombre: cliente.nombre,
          apellido_paterno: cliente.apellido_paterno,
          apellido_materno: cliente.apellido_materno,
          email: cliente.email,
          telefono: cliente.telefono,
          direccion: cliente.direccion,
          fecha_creacion: timestamp,
          fecha_modificacion: timestamp
        },
      };
    
    return new Promise((resolve, reject) => {
        dynamoDb.put(params, (error) => {
        if (error) {
            resolve({'status': 'error', 'message': "Error en el regisro."});
        }
        resolve({'status': 'create', 'message': "Se registro exitosamente."});
      });
    });
  } 

  function getAllCliente(){
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
      };
    
    return new Promise((resolve, reject) => {
        dynamoDb.scan(params, (error, result) => {         
            resolve(result.Items);
          });
    });
  } 
  
  module.exports = {
    addCliente,
    getAllCliente
}
  
