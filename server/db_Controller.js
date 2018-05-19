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
    createUserProfile: (req, res) => {
        makeQuery(`INSERT INTO userdata
        (username, password, email, profilepicture)
        VALUES('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.profilepicture}')`)
        res.json({
            success: 'success'
        });
    },

    //Update user profile
    updateUserProfile: (req, res) => {
        makeQuery(`UPDATE userdata
        SET username = '${req.body.username}', password = '${req.body.password}', email = '${req.body.email}', profilepicture = '${req.body.profilepicture}'
        WHERE  username = '${req.body.update}'`);
        res.json({
            success: 'success'
        })
    },

    // Add question to the db
    addQuestion: (req, res) => {
			console.log(req.body);
        makeQuery(`SELECT companyid FROM company WHERE companyname LIKE '%${req.body.companyName}%'`,
            null,
            (err, result) => {
                if (err) res.json({failure: err});
                if (result.rows[0]) {
									req.body.questions.forEach(quest => {
									const question = Object.values(quest)[0].split('').map((w) => {
											if (w === "\'") {
												return "\'\'";
											}
											return w;
										}).join('');
                    makeQuery(`INSERT INTO questions(companyid, question, type) VALUES('${result.rows[0].companyid}', '${question}', '${Object.keys(quest)[0]}')`)
									})
                } else {
                    makeQuery(`INSERT INTO company (companyname) VALUES('${req.body.companyName}') RETURNING companyid;`,
                    null,
                    (err, result) => {
											console.log(JSON.stringify(result)+'<----- this is result');
											req.body.questions.forEach(quest => {
												const question = Object.values(quest)[0].split('').map((w) => {
													if (w === "\'") {
														return "\'\'";
													}
													return w;
												}).join('');
												makeQuery(`INSERT INTO questions(companyid, question, type) VALUES('${result.rows[0].companyid}', '${question}', '${Object.keys(quest)[0]}')`)
											})
                    });
                }
            });
            res.json({
                success: 'success'
            })
    },

    // getAllData: (req, res) => {
    //     let result = {};
    //     makeQuery(`SELECT company.companyname, questions.question from company INNER JOIN questions ON questions.companyid = company.companyid`),
    //     null,
    //     (err, response)=> {
    //         console.log('hiiiiiiiiii');
    //         console.log(response);
    //         res.send(response);
    //     }
    // }


}