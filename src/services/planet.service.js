const ClienteRepository = require('../repositories/planet.repository');
const planetMapper = require('../mappers/planet.mapper');
const { mapperList} = require('../components/mapper.component');

module.exports = {

    async getPlanets() {
    const planets =  await ClienteRepository.getPlanets();
    const {data} = planets;
    const { results } = data;
    console.log('***result***', data);
    const mapper = mapperList(results, planetMapper);
    return mapper;
    },
}
