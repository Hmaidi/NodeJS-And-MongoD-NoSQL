

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var Info = {
    name :'Soufien Hmaidi',
    email :'hmaidisoufien@yahoo.fr',
    job  :'Front end developer',
    age  : 40,
    City :"Tunis"
};// you can change the following information with you own information

var url = 'mongodb://localhost:27017/MongoDataBase';
const connection = (closure) => {
    return MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('MongoDataBase');
        closure(db);
    })
}


connection(db => {
    db.collection('Persons').insertOne(Info,
        (err, result) => {
            console.log('Done inserted');
        }
    )
})
