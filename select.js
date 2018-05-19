

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


var url = 'mongodb://localhost:27017/MongoDataBase';
const connection = (closure) => {
    return MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('MongoDataBase');
        closure(db);
    })
}

connection(db => {
    db.collection('Persons').find({}).toArray(
        (err, result) => {
            console.log(result);
        }
    )
})
