const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration")
.then(()=>{
    console.log(`connection succesfull`);
}).catch((e)=>{
    console.log(e)
    console.log(`NO connection`);
})

// client.connect((err) => {
//     if (err) throw err;
//     const db = client.db('Registration');
//     const requests = db.collection('requests');
// });