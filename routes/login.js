const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Pour l'affichage du formulaire
router.get('/login', loginController.getLoginPage);

router.post('/login', loginController.submitLoginPage);

module.exports = router;