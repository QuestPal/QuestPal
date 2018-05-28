const makeQuery = require('./db_Interact');


module.exports = () => {
    // console.log('running seed_Data.js...');
    //Empty all tables

    makeQuery(`DELETE FROM questions`);
    makeQuery(`DELETE FROM userdata`);
    makeQuery(`DELETE FROM company`);

    //Add initial data to username table
    makeQuery(`INSERT INTO userdata ("username", "password", "email", "profilepicture" )
    VALUES('troutman21', 'password123', 'philliptroutman213@gmail.com', 'im a picture url');`)
    makeQuery(`INSERT INTO userdata ("username", "password", "email", "profilepicture" )
    VALUES('PAULG05', 'password321', 'SEXYMANLOVER89@HOTMAIL.COM', 'im a picture url');`)

    //Add initial data to questions/company table
    makeQuery(`INSERT INTO company (companyname) VALUES('Apple inc') RETURNING companyid;`, null, (err, result)=>{
        makeQuery(`INSERT INTO questions (companyid, question, type) VALUES ('${result.rows[0].companyid}', 'example question1', 'system design')`)
    });

    makeQuery(`SELECT companyid FROM company WHERE companyname LIKE '%Codesmith LLC%'`,
    null,
    (err, result) => {
        if(err) console.log(err);
        if(result.rows[0]){
            makeQuery(`INSERT INTO questions(companyid, question, type) VALUES('${result.rows[0].companyid}', 'another question for this company', 'algorithm')`)
        }else{
            makeQuery(`INSERT INTO company (companyname) VALUES('Codesmith LLC') RETURNING companyid;`, null, (err, result)=>{
                makeQuery(`INSERT INTO questions (companyid, question, type) VALUES ('${result.rows[0].companyid}', 'example question2', 'system design')`)
            });
        }
    });
}