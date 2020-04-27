'use strict';

const {addCliente,getAllCliente} = require('../../repositories/clientes.repository');


module.exports.create = async (event, context, callback) => {
  console.log("Init create cliente")
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.nombre !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'campos obligatorios.',
    });
    return;
  }

 let clienteResponse = await addCliente(data)

  const response = {
    statusCode: 200,
    body: JSON.stringify(clienteResponse)
  };
  callback(null, response);


};



module.exports.getAll = async (event, context, callback) => {

  let clientes = await getAllCliente();
  const response = {
    statusCode: 200,
    body: JSON.stringify(clientes),
  };
  callback(null, response);
};


