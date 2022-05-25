const { celebrate, Segments, Joi } = require('celebrate');
const monitor = require('nodemon/lib/monitor');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().required(),
            imagem: Joi.string().required(),
            preco: Joi.string().required(),
            categoria: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getByCategory: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            categoria: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            descricao: Joi.string().optional(),
            imagem: Joi.string().optional(),
            preco: Joi.string().optional(),
            categoria: Joi.string().optional(),
        }).min(1),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        })
        .unknown(),
    }),
};