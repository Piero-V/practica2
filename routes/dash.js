var express = require('express');
var router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
    datos = {
        "nombre": "Piero",
        "email": "piero.vasquez@gmail.com"
    };


    res.render('dash', function(err, html) {
        res.render('templates/layout', {
            'usuario': datos,
            'tituloSeccion': 'Dashboard',
            'seccion': html
        });
    });
});

module.exports = router;