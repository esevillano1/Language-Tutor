require("dotenv").config({path: "../../.env.development" });
const mongoose = require('mongoose');
var Promise = require('promise');
var insert = require("./insert");
var read = require("./read");
var languageSchema = require('./schema');

// Name of DB and Collection
var dbName = process.env.DB_NAME;
var collection = process.env.DB_COLLECTION;

// Initial connection will be a localhost connection
const MONGODB_URI = process.env.DB_KEY.replace("DB_USER", process.env.DB_USER).replace("DB_PASSWORD", process.env.DB_PASSWORD).replace("DB_NAME", dbName);

async function mainConnection(){
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const LanguageModel = mongoose.model('Language', languageSchema, collection);

    const language = new LanguageModel({ name: "English" });
    
    language.printName();
    
    await language.save(function (err, doc){
        if (err) return console.error(err);
        console.log("Document " + doc + " inserted successfully!");
    });
    const language_doc = await LanguageModel.find();
    console.log("Language: " + language_doc[0]['name']);
    console.log("Should be English? " + await LanguageModel.find({ name: "English" }));
}

mainConnection().catch(err => console.log(err));
