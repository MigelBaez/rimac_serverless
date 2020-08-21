const RestClient = require('../datasources/rest.datasource');
module.exports = {

    async getPlanets() {
        return await RestClient.get(process.env.API_ENDPOINT+ 'planets');
    },

}
