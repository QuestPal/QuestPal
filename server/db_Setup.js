//Create Tables
const makeQuery = require('./db_Interact');

module.exports = () => {
    const tables = `CREATE TABLE IF NOT EXISTS userdata(
                        "userid" SERIAL PRIMARY KEY,
                        "username" VARCHAR,
                        "password" VARCHAR,
                        "email" VARCHAR,
                        "profilepicture" VARCHAR);
                    CREATE TABLE IF NOT EXISTS company(
                        "companyid" SERIAL PRIMARY KEY,
                        "companyname" VARCHAR);
                    CREATE TABLE IF NOT EXISTS questions(
                        "companyid" INTEGER REFERENCES company(companyid),
                        "question" VARCHAR,
                        "type" VARCHAR);`
    return makeQuery(tables);

}