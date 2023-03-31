const express=require('express');
const authenticate=require('./data-access/authenticate.js');
const sequelize=require('./data-access/database.js');
const userService=require('./routers/user.routes.js');
require('./models/model.js');

const app=express();
const PORT=8080;

app.use(express.json());

app.use('/user',userService);

sequelize.sync().then(function(){
    console.log("Synced db.");
}).catch(function(err){
    console.log("Failed to sync db : ",err.message);
});

app.listen(PORT,function(){
    authenticate()
    .then(()=>console.log("Listening on http://localhost:"+PORT))
    .catch((err)=> console.log(err));
});

