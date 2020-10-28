
const express = require('express'),  
    path = require('path'),  
    bodyParser = require('body-parser'),  
    cors = require('cors'),  
    mysql = require('mysql'); 
//const customerRoutes = require('./routes/customer.route');
   
    const app = express(); 
    app.use(bodyParser.json());  
    app.use(cors());  
    
    
    var mysqlConnection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'tbDeveloper24',
        database:'onlineshop',
        insecureAuth:true
     
    
    });
    // open the MySQL connection
    mysqlConnection.connect((err)=>{
    
        if(!err){
            console.log('DB connection successful!');
        }
        else{
            console.log('DB could not connect\n Error: '+ JSON.stringify(err,undefined,2));
        }
    });
    //app.use('/admin/customers', customerRoutes);  
    let port = process.env.PORT || 8080;  
    const server = app.listen(function(){  
        console.log('Listening on port ' + port);  
    });  