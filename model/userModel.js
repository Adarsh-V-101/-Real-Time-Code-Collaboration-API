const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/codeCollab')
.then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log("error: ",err);
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,     
    },
    email: {
        type: String,   
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('userSchema', userSchema);
