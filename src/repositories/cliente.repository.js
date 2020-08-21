const {create,get, addDynamoParams, getDynamoParams} = require('../datasources/dynamo.datasource');

function addCliente(payload){
    const dynamoParams = addDynamoParams(payload, process.env.DYNAMODB_TABLE);
    return create(dynamoParams)

  }

  function getCliente(){
      const dynamoParams = getDynamoParams(process.env.DYNAMODB_TABLE);
      return get(dynamoParams)
  }

  module.exports = {
    addCliente,
      getCliente
}

