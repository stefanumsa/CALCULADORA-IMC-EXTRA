const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/calculadora-imc', (req, res) => {
    res.render('calculadora-imc');
});

router.get('/calculadora-imc2', (req, res) => {
    res.render('calculadora-imc2');
});

router.get('/informacion', (req, res) => {
    res.render('informacion');
});

router.post('/resultado', (req, res) => {
    const { imc, message } = req.body;
    res.render('resultado', { imc, message });
});

router.post('/resultado2', (req, res) => {
    const { imc, message } = req.body;
    res.render('resultado2', { imc, message });
});

module.exports = router;
