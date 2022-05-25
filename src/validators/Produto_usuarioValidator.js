const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            usuario_id: Joi.string().required(),
            produto_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
            produto_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
};