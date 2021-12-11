const express = require('express');
const { HomeView } = require('../controllers/Frontend/HomeController');

const { ArticleView } = require('../controllers/Frontend/ArticleController');


const router = express.Router();


router.get('/', HomeView);
router.get('/article/:slug', ArticleView);

// router.get('/login', loginView);


module.exports = router;
