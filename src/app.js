const {getCliente,addCliente} = require('./controllers/cliente.controller');
const {getPlanets} = require('./controllers/planet.controller');

module.exports =
    {
        getCliente : getCliente,
        addCliente : addCliente,
        getPlanets : getPlanets,
    }
