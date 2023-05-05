const express=require('express');
const router=express.Router();
const user=require('./controllers/index');

router.get('/:id',user.findOne);
router.post('/signup',user.createUser);
router.put('/:id',user.updateUser);
router.delete('/:id',user.deleteUser);
router.get('/getAutoSuggestUsers/:subString/:limit',user.getAutoSuggestUsers);

module.exports=router;
