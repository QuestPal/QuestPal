const pg = require('pg');
const connectionString = 'postgres://tsblpdvt:zjduKzh7UKDVHPKZsfaY51rVXJDWTWah@elmer.db.elephantsql.com:5432/tsblpdvt'
const pgClient = new pg.Client(connectionString);
pgClient.connect();

//This function can be imported and used in other files to interact with the database
module.exports = (text, values, callback) => {
    return pgClient.query({text:text,values:values}, callback)
}