const mongoose = require('mongoose')
const CounterSchema = new mongoose.Schema({
    BName:{
        type: String,
        required: true
    },
    LName:{
        type: String,
        required: true
    },
    EmailAddress:{
        type: String,
        required: true,
        unique: true
    },
    Contact:{
        type: Number,
        required: true,
        unique: true
    },
    Amount:{
        type: Number,
        required: true
    },
    InterestRate:{
        type: Number,
        required: true
    },
})


const CounterRequest = new mongoose.model("CounterRequest",CounterSchema)
module.exports = CounterRequest;