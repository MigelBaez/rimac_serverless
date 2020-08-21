const ClienteRepository = require('../repositories/planet.repository');
const planetMapper = require('../mappers/planet.mapper');
const ObjectMapper = require('object-mapper');

module.exports = {

    async getPlanets() {
    const planets =  await ClienteRepository.getPlanets();
    const {data} = planets;
    const { results } = data;
        const mapper = results.map((element) => (ObjectMapper(element, planetMapper)));
        return mapper;
    },
}
