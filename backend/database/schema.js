const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: String
});

languageSchema.methods.printName = function printName(){
    console.log("Name of current language: " + this.name);
}

module.exports = languageSchema;
