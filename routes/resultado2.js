const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
  res.render('index');
});

// Ruta para la calculadora IMC (Sistema Inglés)
router.get('/calculadora-imc2', (req, res) => {
  res.render('calculadora-imc2');
});

// Ruta para manejar el envío del formulario y calcular el IMC
router.post('/resultado2', (req, res) => {
  console.log(req.body);  // Añadir esta línea para depuración

  const heightInches = parseFloat(req.body.height);
  const weightPounds = parseFloat(req.body.weight);

  if (isNaN(heightInches) || isNaN(weightPounds)) {
    return res.status(400).send("Invalid input");
  }

  // Calcular el IMC
  const imc = (weightPounds / (heightInches * heightInches)) * 703;
  let message;

  if (imc < 18.5) {
    message = 'Bajo peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    message = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    message = 'Sobrepeso';
  } else {
    message = 'Obesidad';
  }

  // Enviar el resultado al cliente
  res.render('resultado2', { imc: imc.toFixed(2), message });
});

module.exports = router;
