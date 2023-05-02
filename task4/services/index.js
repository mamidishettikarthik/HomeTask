const User = require('../models/users')
const { v4: uuidv4 } = require('uuid');
const { Op } = require("sequelize");

const createUser = (userData) => {

    return User.create({
        id: uuidv4(),
        login: userData.login,
        password: userData.password,
        age: userData.age,
        isDeleted: userData.isDeleted
    });
}
const findUserById = (userId) => {
    return User.findByPk(userId);
}
const findAllUsers = (subString, limit) => {
    return User.findAll({
        where: {
            login: {
                [Op.substring]: subString
            },
            isDeleted: false
        },
        limit: limit
    });
}
module.exports = {
    createUser,
    findUserById,
    findAllUsers
}
