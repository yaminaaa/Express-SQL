const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.getAdminDashboard);
// Pour l'affichage du formulaire

module.exports = router;