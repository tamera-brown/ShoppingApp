var express = require('express'),  
    path = require('path'),  
    bodyParser = require('body-parser'),  
   // cors = require('cors'),  
    mysql = require('mysql'), 
    logger=require("./Middleware/middleware");
    const port = process.env.PORT || 8080; 
    const host='localhost'; 
   

//const customerRoutes = require('./routes/customer.route');
   
    app = express(); 
    // var corsOptions={
    //     origin:"http//localhost:8081"
    // }

    

    // init middleware
     app.use(logger);
    app.use(bodyParser.json()); 

    //app.use(cors(corsOptions));  

    // Handle form data
app.use(express.urlencoded({extended:false}));
  
    
    const mysqlConnection=mysql.createConnection({
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
    //Get all users
app.get('/admin/users',(req,res)=>{
    var selectStatement= 'SELECT * FROM users';
    mysqlConnection.query(selectStatement,(err,rows)=>{
        if(!err){
            res.send(rows);
        }
        else{
            res.status(400).json({msg: 'No users in database'});
        }
    });
});
//Get One User
app.get('/users/:id',(req,res)=>{
var OneUserDetails=`SELECT * FROM users WHERE user_id='${req.params.id}'`;

mysqlConnection.query(OneUserDetails,(err,result,fields)=>{
    if(!err){
       
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            res.send(row);
           
          });
    }
    else{
        res.status(400).json({msg: `No user with user_id ${req.params.id}`});
    }
});
});     
  app.post('/register',(req,res)=>{
        const NewUser={
            user_id: req.body.user_id,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role
        }
        var RegisterUser=`INSERT INTO users (user_id,name,email,password,role) VALUES ('${NewUser.user_id}','${NewUser.name}','${NewUser.email}','${NewUser.password}','${NewUser.role}')`;
        mysqlConnection.query(RegisterUser,(err,result,fields)=>{
            if(!err){
               
                res.send("User Registered!");
            }
            else{
                res.status(400).json({msg: 'error with register'});
            }
        });
  });

  app.put('/users/update/:id',(req,res)=>{
    const UpdateUser={
        user_id: req.body.user_id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    }
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        if(row.user_id==req.params.id){
            var updateStatement=
        }
        else{
            res.status(400).json({msg: `No user with user_id ${req.params.id}`});
        }
       
      });
  });
   app.delete('/admin/:id',(req,res)=>{
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        if(row.user_id==req.params.id){
            var deletStatement=`DELETE FROM users WHERE user_id='${req.params.id}'`;
            mysqlConnection.query(deletStatement,(err)=>{
                if(!err){
                   
                    res.send("User deleted");
                }
                else{
                    res.status(400).json({msg: 'error with delete'});
                }
            });

        }
        else{
            res.status(400).json({msg: `No user with user_id ${req.params.id}`});
        }
       
      });
   });

  app.get('/',(req,res)=>{
      res.json({msg: 'Welcome to Express Server'});
  });
     
  
  app.listen(port, host,()=>{  
     console.log('Express server is listening on port ' + port);  
 });
