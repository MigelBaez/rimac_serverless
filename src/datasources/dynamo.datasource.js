'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();



module.exports = {
     addDynamoParams(payload, tableName)
    {

        const timestamp = new Date().getTime();
        const params = {
            TableName: tableName,
            Item: {
                id: uuid.v1(),
            },
        };

        Object.keys(payload).forEach((key) => {
            params.Item[key] = payload[key];
        });
        params.Item['fechaCreacion'] = timestamp;
        params.Item['fechaModificacion'] = timestamp;
        return params;
    },

    getDynamoParams(tableName){
        const params = {
            TableName: tableName,
        };
 return params;
    },
    create(params){

        return new Promise((resolve, reject) => {
            dynamoDb.put(params, (error) => {
                if (error) {
                    resolve({'status': 'error', 'message': "Error al crear el regisro."});
                }
                resolve( params.Item);
            });
        });
    },

     get(params){

    return new Promise((resolve, reject) => {
        dynamoDb.scan(params, (error, result) => {
            resolve(result.Items);
        });
    });
},
}

