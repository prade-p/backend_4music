const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            usuario_id: Joi.string().required(),
            produto_id: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
};