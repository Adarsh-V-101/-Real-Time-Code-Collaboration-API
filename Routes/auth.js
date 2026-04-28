const express = require('express');
const router = express.Router();
const controller = require('../controller/authControl');
const loginMiddleware = require('../utilities/loginMiddleware')
router.get('/', controller.home);

router.get('/login',loginMiddleware, controller.getLogin);

router.post('/login',loginMiddleware, controller.postLogin);

router.get('/signup',loginMiddleware, controller.getSignup);

router.post('/signup',loginMiddleware, controller.postSignup)

module.exports = router;