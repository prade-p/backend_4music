const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            descricao: Joi.string().required(),
            endereco: Joi.string().required(),
            email: Joi.string().email().required(),
            telefone: Joi.string().required(),
            password: Joi.string().min(6).required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().optional(),
            descricao: Joi.string().optional(),
            endereco: Joi.string().optional(),
            email: Joi.string().email().optional(),
            telefone: Joi.string().optional(),
        }).min(1),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
};