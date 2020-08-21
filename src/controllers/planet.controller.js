const { success} = require('../components/response.component');
const Service = require('../services/planet.service');
module.exports = {

    async getPlanets(event, context, callback) {
        const result = await Service.getPlanets();
        return success(result,callback);
    },

}
