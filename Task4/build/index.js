"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var User = require('../models/model');
var _require = require('uuid'),
  uuidv4 = _require.v4;
var _require2 = require("sequelize"),
  Op = _require2.Op;
var createUser = function createUser(userData) {
  return User.create({
    id: uuidv4(),
    login: userData.login,
    password: userData.password,
    age: userData.age,
    isDeleted: userData.isDeleted
  });
};
var findUserById = function findUserById(userId) {
  return User.findByPk(userId);
};
var findAllUsers = function findAllUsers(subString, limit) {
  return User.findAll({
    where: {
      login: _defineProperty({}, Op.substring, subString),
      isDeleted: false
    },
    limit: limit
  });
};
module.exports = {
  createUser: createUser,
  findUserById: findUserById,
  findAllUsers: findAllUsers
};