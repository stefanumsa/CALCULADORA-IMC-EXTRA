const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registro', { title: 'Registro' });
});

module.exports = router;