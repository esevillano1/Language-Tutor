async function find(numObjs, db, dbName, collection){
    let results = null;
    switch(numObjs) {
        case 1:
            console.log("Searching for one document in the collection");
            results = results = (db, dbName, collection);
            break;
            default:
            console.log("Searching for all documents in the collection");
            results = findAll(db, dbName, collection);
            break;
    }

    console.log("Results being returned to the connect: " + results);
    return results;
}

/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection
 * @returns An object from the collection
 */
function findOne(db, dbName, collection){
    var dbo = db.db(dbName);

    return readOneFromDb(dbo, db, collection);
}

/**
 * 
 * @param {*} db 
 * @param {*} dbName 
 * @param {*} collection 
 */
function findAll(db, dbName, collection){
    var dbo = db.db(dbName);

    return readAllFromDb(dbo, db, collection);
}

async function readOneFromDb(dbo, db, collection){
    let results = null;

    dbo.collection(collection).find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log("Successfully read one document from the DB");
        results = setResults(result, 1);
        db.close();
    });

    return results;
}

async function readAllFromDb(dbo, db, collection){
    let results = null;

    dbo.collection(collection).find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log("Successfully read all documents from the DB");
        results = setResults(result, 0);
        db.close();
    });

    return results;
}

function setResults(result, num){
    if (num===1) results = result[0];
    else results = result;
    Array(results).forEach(doc => {
        console.log("Logging the results: " + JSON.stringify(doc, null, 4));
    })
    return results;
}

module.exports= find;
