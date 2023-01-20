const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomepage);
// Pour l'affichage du formulaire
router.get('/contact', mainController.getContactPage); 

// Pour la soumission du formulaire (gérer les données du formulaire)
router.post('/contact', mainController.submitContactForm)
router.get('/posts/:id', mainController.getBlogPost);
router.post('/posts/:id', mainController.submitComment);

module.exports = router;