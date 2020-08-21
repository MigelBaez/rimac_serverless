const planetMapper = require('../mappers/planet.mapper');
const ObjectMapper = require('object-mapper');


module.exports = {

    async mapperList(results, mapper) {
      return results.map((element) => (ObjectMapper(element, mapper)));
    },
}
