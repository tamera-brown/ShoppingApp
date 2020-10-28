
const mysql = require('mysql');  
const Schema = mysql.Schema;  
// Define collection and schema for Customer  
let Customer = new Schema({  
  CustomerUsername: {  
    type: String  
  },  
  CustomerName: {  
    type: String  
  },  
  CustomerEmail: {  
    type: String  
  },  
  CustomerPassword: {  
    type: String  
  }  
},{  
    collection: 'Customer'  
});  
module.exports = mysql.model('Customer', Customer);  