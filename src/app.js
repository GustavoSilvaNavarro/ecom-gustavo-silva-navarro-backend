//CALL MODULES
import express from "express";

//INITIALIZATIONS
const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES

//ROUTES

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});