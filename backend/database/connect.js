require("dotenv").config({path: "../../.env.development" });
var MongoClient = require('mongodb').MongoClient;
var insert = require("./insert");
var read = require("./read");

// Name of DB and Collection
var dbName = process.env.DB_NAME;
var collection = process.env.DB_COLLECTION;

// Initial connection will be a localhost connection
var mongoUri = process.env.DB_KEY.replace("DB_USER", process.env.DB_USER).replace("DB_PASSWORD", process.env.DB_PASSWORD);

// Connect to the DB
MongoClient.connect(mongoUri, function(err, db){
    if (!err){
        console.log("Connected to the database");
        // If no ID is specified for the _id field, then a unique ID will be assigned for each document
        var obj = [
            { language: "English" },
            { language: "French" }
        ];
        // var readObj = read(0, db, dbName, collection);
        var readObj = read(1, db, dbName, collection);
        let docs = [readObj];
        console.log("Documents: " + docs);
        docs.forEach(document => {
            if (document===null) console.log("document is empty");
            else console.log("Reading document " + document['language'] + " from collection " + collection);
        });
        // insert(db, dbName, collection, obj);
    } else { 
        console.log("Failed to connect to the database");
    }
});