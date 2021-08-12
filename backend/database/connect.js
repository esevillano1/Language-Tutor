var MongoClient = require('mongodb').MongoClient;
var insert = require("./insert");

// Name of DB and Collection
var dbName = "testDB";
var collection = "languages";

// Initial connection will be a localhost connection
var mongoUri = "mongodb://localhost:27017/" + dbName;

// Connect to the DB
MongoClient.connect(mongoUri, function(err, db){
    if (!err){
        console.log("Connected to the database");
        // If no ID is specified for the _id field, then a unique ID will be assigned for each document
        var obj = [
            { language: "English", _id: 1 },
            { language: "Spanish", _id: 2 }
        ];
        insert(db, dbName, collection, obj);
    } else { 
        console.log("Failed to connect to the database");
    }
});