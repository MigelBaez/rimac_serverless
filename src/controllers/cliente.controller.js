const Validation = require('../components/validation.component');
const Service = require('../services/cliente.service');
const {clienteSchema }= require('../schemas/cliente.schema');
const {errorValidation, success} = require('../components/response.component');
const {getPayload} = require('../components/request.component');
module.exports = {

    async addCliente(event, context, callback) {
        const {payload} = await getPayload(event);
        const {error} = await Validation.validate(payload, clienteSchema);
        if(error)
        {
            errorValidation(error, callback);
        }
        const result =await Service.addCliente(payload);
        return success(result,callback);
    },

    async getCliente(event, context, callback) {
        const result =await Service.getCliente();
        return success(result,callback);
    },
}
