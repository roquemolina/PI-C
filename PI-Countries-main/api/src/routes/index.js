const { Router } = require('express');
const countriesRouter = require('../routes/countriesRouter');
const activitiesRouter = require('../routes/activitiesRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);

router.get("/", (req, res) => {
  res.status(200).send('Hola home');
})


module.exports = router;
