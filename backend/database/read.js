function find(numObjs, db, dbName, collection){
    switch(numObjs) {
        case 1:
            console.log("Searching for one document in the collection");
            return findOne(db, dbName, collection);
            default:
            console.log("Searching for all documents in the collection");
            return findAll(db, dbName, collection);
    }
}

/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection `
 * @returns An object from the collection
 */
function findOne(db, dbName, collection){
    var dbo = db.db(dbName);

    dbo.collection(collection).findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        return result;
    });
}

/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection 
 */
function findAll(db, dbName, collection){
    var dbo = db.db(dbName);

    dbo.collection(collection).find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        return result;
    });
}

module.exports= find;
