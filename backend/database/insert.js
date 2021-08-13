/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection 
 * @param {*} document 
 */
function insert(db, dbName, collection, document){
    if (document.length == 1){
        insertOne(db, dbName, collection, document);
    } else {
        insertMany(db, dbName, collection, document);
    }
}

/**
 * Inserts only one object into the collection
 * @param {*} db Database object
 * @param {*} dbName Database name
 * @param {*} collection Collection Name
 * @param {*} document Document being inserted
 */
function insertOne(db, dbName, collection, document){
    var dbo = db.db(dbName);
    dbo.collection(collection).insertOne(document[0], function(err, res){
        if (err) throw err;
        console.log("Inserting " + document[0].language + " to the collection " + collection);
        if (res.acknowledged) {
            console.log("Document was successfully inserted to the collection")
            console.log(res);
        }
        db.close();
    })
}

/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection  
 * @param {*} documents 
 */
function insertMany(db, dbName, collection, documents){
    var dbo = db.db(dbName);
    dbo.collection(collection).insertMany(documents, function(err, res){
        if (err) throw err;
        documents.forEach(document => {
            console.log("Inserting " + document.language + " to the collection " + collection);
        });
        if (res.acknowledged){
            console.log("Documents were successfully inserted to the collection");
            console.log(res);
        }
        db.close();
    })
}

module.exports = insert;
