var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.set('port', (process.env.PORT || 3000));

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(port, function(){
    console.log('Server started on port ' + app.get('port'));
});