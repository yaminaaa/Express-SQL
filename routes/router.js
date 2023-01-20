// Comme pour l'app principal je vais avoir besoin du module express
const express = require('express');
// J'initialise pas un nouveau app express -> Bah il existe déjà dans le index.js
// ici je vais créer "une extension à express" grace à express.Router() 
// Un peu comme une DLC pour express
// pour init le router je fais :
const router = express.Router();
const mainRouter = require('./main');
const adminRouter = require('./admin');
const loginRouter = require('./login');

router.use(mainRouter);
router.use(adminRouter);
router.use(loginRouter);


// C'est un module nodejs donc j'exporte le router à l'aide de 
module.exports = router;