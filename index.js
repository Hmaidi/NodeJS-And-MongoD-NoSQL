var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/MongoDataBase';
mongodb.connect(url,function(erreur,db){
   if(erreur) {
       throw err;
   }
   console.log('data base created' );
   var dbase = db.db("MongoDataBase");
   dbase.createCollection('Persons', function(err,result){
       if(err) {
           throw err;
       }
      console.log('Collection  created');
      db.close();
   });
  
}) 

