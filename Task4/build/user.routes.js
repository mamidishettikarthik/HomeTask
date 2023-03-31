"use strict";

var express = require('express');
var router = express.Router();
var user = require('./controllers/index');
router.get('/:id', user.findOne);
router.post('/signup', user.createUser);
router.put('/:id', user.updateUser);
router["delete"]('/:id', user.deleteUser);
router.get('/getAutoSuggestUsers/:subString/:limit', user.getAutoSuggestUsers);
module.exports = router;