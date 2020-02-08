const jwt = require('jsonwebtoken');
verificarToken = (token) => {
    try {
        //verifica si mi token cumple si aun vive si es valido si la cpntrae;a concuerda
        let data = jwt.verify(token, 'pps', { algorithm: 'RS256' });
        return data;
    } catch (error) {
        return null;
    }
}

wachiman = (req, res, next) => {
    if (req.headers.authorization) {
        console.log(req.headers.authorization);
        let token = req.headers.authorization.split(' ')[1];
        let resultado = verificarToken(token);
        if (resultado) {
            next();
        }
        else {
            res.status(401).json({
                ok: false,
                mensaje: 'No esta autorizado para realizar la solucitud'
            })
        }
    }else{
        res.status(401).json({
            ok:false,
            mensaje:'necesita estar auntenticado para realizar esta solicitud'
        })
    }
}
 module.exports={
     verificarToken,
wachiman
 }