const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const signupSchema = new mongoose.Schema({
    Name: {
      type : String,
      required : true  
    },
    Age: {
        type: Number,
        required: true
    },
    EmailAddress: {
        type: String,
        required: true,
        unique:true
    },

    Password: {
        type: String,
        required: true
    },

    Confirmpassword: {
        type: String,
        required: true
    },

    Contact : {
        type : Number,
        required : true,
        unique : true
    }
})

signupSchema.pre("save", async function(next){
    if(this.isModified("Password")){
        this.Password = await bcrypt.hash(this.Password, 12);
        this.Confirmpassword = undefined;
    }
    next();  
})

const Register = new mongoose.model("Register",signupSchema)
module.exports = Register;