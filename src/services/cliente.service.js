const  Repository = require('../repositories/cliente.repository');

module.exports = {
    async addCliente(payload) {
      return await Repository.addCliente(payload);
    },
    async getCliente() {
        return await Repository.getCliente();
    },

}
