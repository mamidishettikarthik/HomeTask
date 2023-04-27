const { validateSchema } = require('../../validator/validator');
const { v4:uuidv4 } = require('uuid');
const users = [];

const findUser =  (req, res) => {
    const userId = req.params.id;
    try {
        const currentUser = users.find((user) => {
            return user.id === userId && user.isDeleted !== true;
        });
        if (currentUser) {
            return res.status(200).json(currentUser);
        }
        return res.status(404).json({ 'message':'User does not exist' });
    } catch (error) {
        return res.status(500).json({ 'message':'Error' });
    }
};


const createUser = (req, res) => {
    const userData = req.body;
    userData.id = uuidv4();
    const { error, value } = validateSchema(userData);
    if (error) {
        console.log(error);
        res.status(400).json({ error: error.details });
    }
    try {
        users.push(userData);
        return res.status(201).json(value);
    } catch (e) {
        return res.status(500).json({ 'message':'Error' });
    }
};


const updateUser = (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    try {
        const currentUser = users.find((user) => {
            return user.id === userId && user.isDeleted !== true;
        });
        if (currentUser) {
            currentUser.login = userData.login || currentUser.login;
            currentUser.password = userData.password || currentUser.password;
            currentUser.age = userData.age || currentUser.age;
            currentUser.isDeleted = userData.isDeleted || currentUser.isDeleted;
            const { error, value } = validateSchema(currentUser);
            if (error) {
                console.log(error);
                return res.status(400).json({ error:error.details });
            }
            return res.status(200).json(value);
        }
        return res.status(404).json({ 'message':'User does not exist' });
    } catch (error) {
        return res.status(500).json({ 'message':'Error' });
    }
};


const autoSuggestUsers = (req, res) => {
    const loginSubstring = req.params.loginSubstring;
    const limit = req.params.limit;
    const matchedUsers = [];
    try {
        users.forEach((user) => {
            if (user.login.includes(loginSubstring) && user.isDeleted !== true) {
                matchedUsers.push(user);
            }
        });
        if (matchedUsers.length === 0) {
            return res.status(404).json({ 'message':'No users matching the substring' });
        }
        matchedUsers.sort((a, b) => {
            if (a.login < b.login) return -1;
            if (a.login > b.login) return 1;
            return 0;
        });
        return res.status(200).json(matchedUsers.slice(0, limit));
    } catch (error) {
        return res.status(500).json({ 'message':'Error' });
    }
};


const deleteUser = (req, res) => {
    const userId = req.params.id;
    try {
        const user = users.find((user1) => {
            return user1.id === userId && user1.isDeleted !== true;
        });
        if (user) {
            user.isDeleted = true;
            return res.status(200).json('Deleted Successfully');
        }
        return res.status(404).json({ 'message':'User does not exist' });
    } catch (error) {
        return res.status(500).json({  'message':'Error' });
    }
};


module.exports = {
    findUser,
    createUser,
    updateUser,
    autoSuggestUsers,
    deleteUser
};
