const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');

// Ruta para calcular el IMC y guardar los datos en la base de datos
router.post('/bmi', bmiController.calculateAndSaveBMI);

// Ruta para obtener todos los resultados almacenados
router.get('/bmi', bmiController.getAllBMI);

module.exports = router;
