var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'upkeepautoservicing'
 
});
 module.exports=connection;