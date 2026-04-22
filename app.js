const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./Routes/auth');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')

app.use('/', authRoute);

mongoose.connect('mongodb://localhost:27071/codeCollab')
.then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log("error: ",err);
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});