const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
    FName:{
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
    Purpose:{
        type: String,
        required: true
    },
})

console.log("Waiting for request js")

const Request = new mongoose.model("Request",requestSchema)
module.exports = Request;
// function fetchRequests(callback) {
//     Request.find({}, (err, requests) => {
//       if (err) {
//         console.error(err);
//         callback([]);
//       } else {
//         callback(requests);
//       }
//     });
//   }
  
//   // function to generate table rows from request data
//   function generateRows(data) {
//     let html = '';
//     data.forEach(request => {
//       html += `
//         <tr>
//           <td>${request.FName}</td>
//           <td>${request.EmailAddress}</td>
//           <td>${request.Contact}</td>
//           <td>${request.Amount}</td>
//           <td>${request.InterestRate}</td>
//         </tr>
//       `;
//     });
//     return html;
//   }
//   fetchRequests(requests => {
//   document.getElementById('requests-table-body').innerHTML = `<h1> Heelo</h1>`
//   console.log(document.getElementById('requests-table-body'));
// });
