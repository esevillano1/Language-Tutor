var MongoClient = require('mongodb').MongoClient;

// Initial connection will be a localhost connection
var mongoUri = "mongodb://localhost:27017/testDB";

var collections = ["languages"];

// Connect to the DB
MongoClient.connect(mongoUri, function(err, db){
    if (!err){
        console.log("Connected to the database");
        db.close();
    } else { 
        console.log("Failed to connect to the database");
    }
});