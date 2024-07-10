const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/registro', (req, res) => {
    res.render('registro');
});

router.post('/login', (req, res) => {
});

router.post('/registro', (req, res) => {
});

module.exports = router;
