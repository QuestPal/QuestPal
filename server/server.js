const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbSetup = require('./db_Setup');
const dbSeedData = require('./seed_Data');
const dbController = require('./db_Controller');
const app = express();
const port = 3000;

app.use(express.static('build'))

//sets up DB
dbSetup()
.then(()=>{
    dbSeedData()
});

//////server config/////
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

///Regular routes///
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


//DB Query Routes
app.get('/getCompanyNames',dbController.getCompanyNames);
app.post('/getQuestionsFromCompany', dbController.getQuestionsFromCompany);
app.get('/searchKeyword', dbController.searchKeyword);
app.post('/createUserProfile', dbController.createUserProfile);
app.put('/updateUserProfile', dbController.updateUserProfile);

//Auth Routes

app.listen(port, ()=> {console.log(`server listening on ${port}...`)});