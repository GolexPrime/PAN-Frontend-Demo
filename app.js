/***********************************************************************************************
imports
***********************************************************************************************/

var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var cfenv = require('cfenv');
var app = express();
var session = require('express-session');
var MemoryStore = require('session-memory-store')(session);

/***********************************************************************************************
session management
***********************************************************************************************/

var sessionConfig = {
    name: 'lala',
    expires: 86400,
    resave: 'true',
    saveUninitialized: 'true',
    secret: '_da_funk_is_inda_house',
    store: new MemoryStore()
}

app.use(session(sessionConfig));

/***********************************************************************************************
app env
***********************************************************************************************/

const appEnv = cfenv.getAppEnv({});

/***********************************************************************************************
serving frontend
***********************************************************************************************/

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// defining frontend dev
app.use(express.static(__dirname + '/public'));

/***********************************************************************************************
api - routing
***********************************************************************************************/

require('./routing/routing.js')(app);

/***********************************************************************************************
routing correction
***********************************************************************************************/

// rewrite virtual urls to angular app to enable refreshing of internal pages
app.get('*',
    function (req, res, next) {
        res.sendFile(path.resolve(__dirname + '/public/index.html'));
    }
);

/***********************************************************************************************
starting the server
***********************************************************************************************/

app.listen(appEnv.port, '0.0.0.0', function () {
    console.log("server starting on " + appEnv.url);
});