var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

var app = express();

/*--- Spot for database ---*/

require('dotenv').config();
require('./config/database');

/*--- Spot for HorseRouter ---*/


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/auth'));

 /*--- Spot for api routes ---*/
 app.use('/api/users', require('./routes/api/users'));
 app.use('/api/horses', require('./routes/api/horses'));

/*--- Spot for catch all route ---*/

// for a SPA's client-side routing to properly work 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
app.listen(port, function() {
 console.log(`Express app listening on port ${port}`);
});
