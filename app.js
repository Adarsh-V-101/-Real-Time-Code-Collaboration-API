const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./Routes/auth');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine','ejs')

app.use('/', authRoute);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});