const makeQuery = require('./db_Interact');

module.exports = {
    // All company names
    getCompanyNames: (req, res) => {
        makeQuery(`SELECT companyname from company`,
        null,
        (err, response) => {
            let companies = response.rows.map(e => e.companyname);
            res.json(companies);
        });
    },

    //All questions for a company
    getQuestionsFromCompany: (req, res) => {
        makeQuery(`SELECT question
        FROM questions
        WHERE companyid = ${req.body.id}`,
        null,
        (err, response) => {
            let questions = response.rows.map(e => e.question);
            res.json(questions);
        });
    },

    //Search questions for a keyword
    searchKeyword: (req, res) => {
        res.send('you hit the searchKeyword')
    },

    //Create user profile
    createUserProfile: (req, res)=>{
        makeQuery(`INSERT INTO userdata
        (username, password, email, profilepicture)
        VALUES('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.profilepicture}')`)
        res.json({success:'success'});
    },

    //Update user profile
    updateUserProfile: (req, res) => {
        makeQuery(`UPDATE userdata
        SET username = '${req.body.username}', password = '${req.body.password}', email = '${req.body.email}', profilepicture = '${req.body.profilepicture}'
        WHERE  username = '${req.body.update}'`);
        res.json({success: 'success'})
    }
}