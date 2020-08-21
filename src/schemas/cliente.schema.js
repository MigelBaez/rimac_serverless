const Joi = require('@hapi/joi');

const clienteSchema = Joi.object().keys({
    nombre: Joi.string().required().max(100),
    apellidoPaterno: Joi.string().required().max(100),
    apellidoMaterno: Joi.string().required().max(100),
    email: Joi.string().required().email().max(100),
    telefono: Joi.string().required().max(12),
    direccion: Joi.string().required().max(500)
});

module.exports.clienteSchema = clienteSchema;
