var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'selomart',
database:'letsup'


});
module.exports=connection;