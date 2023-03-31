"use strict";

var _require = require('../../validator/validator'),
  validateSchema = _require.validateSchema;
var _require2 = require('uuid'),
  uuidv4 = _require2.v4;
var users = [];
var findUser = function findUser(req, res) {
  var userId = req.params.id;
  try {
    var currUser = users.find(function (user) {
      return user.id === userId && user.isDeleted !== true;
    });
    if (currUser) {
      return res.status(200).json(currUser);
    }
    return res.status(404).json({
      'message': 'User does not exist'
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
var createUser = function createUser(req, res) {
  var userData = req.body;
  userData.id = uuidv4();
  // Perform validation of req.body data
  var _validateSchema = validateSchema(userData),
    error = _validateSchema.error,
    value = _validateSchema.value;
  if (error) {
    console.log(error);
    res.status(500).json(error.details);
  }
  try {
    users.push(userData);
    return res.status(200).json(value);
  } catch (e) {
    return res.status(500).json(error);
  }
};
var updateUser = function updateUser(req, res) {
  var userId = req.params.id;
  var userData = req.body;
  try {
    var currUser = users.find(function (user) {
      return user.id === userId && user.isDeleted !== true;
    });
    if (currUser) {
      currUser.login = userData.login || currUser.login;
      currUser.password = userData.password || currUser.password;
      currUser.age = userData.age || currUser.age;
      currUser.isDeleted = userData.isDeleted || currUser.isDeleted;
      var _validateSchema2 = validateSchema(currUser),
        error = _validateSchema2.error,
        value = _validateSchema2.value;
      if (error) {
        console.log(error);
        return res.status(500).json(error.details);
      }
      return res.status(200).json(value);
    }
    return res.status(404).json({
      'message': 'User does not exist'
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
var autoSuggestUsers = function autoSuggestUsers(req, res) {
  var loginSubstring = req.params.loginSubstring;
  var limit = req.params.limit;
  var matchedUsers = [];
  try {
    users.forEach(function (user) {
      if (user.login.includes(loginSubstring) && user.isDeleted !== true) {
        matchedUsers.push(user);
      }
    });
    if (matchedUsers.length === 0) {
      return res.status(404).json({
        'message': 'No users matching the substring'
      });
    }
    matchedUsers.sort(compare);
    return res.status(200).json(matchedUsers.slice(0, limit));
  } catch (error) {
    return res.status(400).json(error);
  }
};
function compare(a, b) {
  if (a.login < b.login) return -1;
  if (a.login > b.login) return 1;
  return 0;
}
var deleteUser = function deleteUser(req, res) {
  var userId = req.params.id;
  try {
    var user = users.find(function (user1) {
      return user1.id === userId && user1.isDeleted !== true;
    });
    if (user) {
      user.isDeleted = true;
      return res.status(200).json('Deleted Successfully');
    }
    return res.status(404).json({
      'message': 'User does not exist'
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
module.exports = {
  findUser: findUser,
  createUser: createUser,
  updateUser: updateUser,
  autoSuggestUsers: autoSuggestUsers,
  deleteUser: deleteUser
};
