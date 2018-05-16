const makeQuery = require('./db_Interact');
const example_company = 'example company!!!'


module.exports = () => {
    console.log('running seed_Data.js...');
    //Empty all tables
    makeQuery(`DELETE FROM questions`);
    makeQuery(`DELETE FROM userdata`);
    makeQuery(`DELETE FROM company`);

    //Add initial data to company table
    makeQuery(`INSERT INTO company (companyname) VALUES('paul inc');`);
    makeQuery(`INSERT INTO company (companyname) VALUES('phillip corp.');`);

    //Add initial data to username table
    makeQuery(`INSERT INTO userdata ("username", "password", "email", "profilepicture" )
    VALUES('troutman21', 'password123', 'philliptroutman213@gmail.com', 'im a picture url');`)
    makeQuery(`INSERT INTO userdata ("username", "password", "email", "profilepicture" )
    VALUES('PAULG05', 'password321', 'SEXYMANLOVER89@HOTMAIL.COM', 'im a picture url');`)

    //Add initial data to questions/company table
    makeQuery(`INSERT INTO company (companyname) VALUES('Paul Corp') RETURNING companyid;`, null, (err, result)=>{
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

    //this is messing up because of async stuff
    //we arent worried since live application will not be making queries that fast

    // makeQuery(`SELECT companyid FROM company WHERE companyname LIKE '%Codesmith LLC%'`,
    // null,
    // (err, result) => {
    //     if(err) console.log(err);
    //     console.log(result, 'result from 45');
    //     //this should evel true
    //     if(result.rows[0]){
    //         console.log('im running the if on line 31');
    //         makeQuery(`INSERT INTO questions(companyid, question, type) VALUES('${result.rows[0].companyid}', 'show me what you got', 'algorithm')`)
    //     }else{
    //         console.log('im running the else online 33');
    //         makeQuery(`INSERT INTO company (companyname) VALUES('Codesmith LLC') RETURNING companyid;`, null, (err, result)=>{
    //             makeQuery(`INSERT INTO questions (companyid, question, type) VALUES ('${result.rows[0].companyid}', 'show me again', 'system design')`)
    //         });
    //     }
    // })
}