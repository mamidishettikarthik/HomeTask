const Joi = require('joi');

const validator = (schema) => {
    return (payload) => {
        return schema.validate(payload, { abortEarly:false });
    };
};

const userSchema = Joi.object({
    //id:Joi.string().required(),
    login:Joi.string().required(),
    password:Joi.string().min(6).max(20).alphanum().required(),
    age:Joi.number().integer().min(4).max(130).required(),
    isDeleted:Joi.boolean().required()
});

exports.validateSchema = validator(userSchema);
