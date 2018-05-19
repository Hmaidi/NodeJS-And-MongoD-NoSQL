

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
var filter = {age:{$gt:40}};
connection(db => {
    db.collection('Persons').remove(filter, (err, result) => {
            console.log(result.result.n +"deleted");
        })
})
