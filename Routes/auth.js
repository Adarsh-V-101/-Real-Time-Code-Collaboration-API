const express = require('express');
const router = express.Router();
const controller = require('../controller/authControl');
const loginMiddleware = require('../utilities/loginMiddleware')
router.get('/', controller.home);

router.get('/login', controller.getLogin);

router.post('/login', controller.postLogin);

router.get('/signup', controller.getSignup);

router.post('/signup', controller.postSignup);

router.get('/logout', controller.logout);

router.get('/profile', loginMiddleware, controller.getProfile)

module.exports = router;