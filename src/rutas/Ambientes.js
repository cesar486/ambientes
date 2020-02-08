const express =require('express');
const Ambiente = require('../controleadores/Ambiente');
const ambiente_router = express.Router()

ambiente_router.get('/ambiente',Ambiente.getAmbientesWhithPabellon);
ambiente_router.post('/ambiente',Ambiente.postAmbientes);

module.exports ={
    ambiente_router
}
