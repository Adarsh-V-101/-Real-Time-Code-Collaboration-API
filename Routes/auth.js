const express = require('express');
const router = express.Router();
const userSchema = require('../model/userModel');

router.get('/', (req, res) => {
    res.render('home');

});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(`Login attempted with email: ${email} and password: ${password}`);
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;