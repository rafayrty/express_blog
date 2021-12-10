const express = require('express');
const { HomeView } = require('../controllers/Frontend/HomeController');
const router = express.Router();


router.get('/', HomeView);

// router.get('/login', loginView);


module.exports = router;
