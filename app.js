var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
// var users = require('./routes/users');
var Tasks=require('./routes/Tasks');
// var Students=require('./routes/Students');
var app = express();
// view engine setup
//  app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.engine('html', require('ejs').renderFile);
// app.set('views', __dirname + '/views'); // general config
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// app.use("/views", express.static(__dirname + '/views'));
// app.use("/dist", express.static(__dirname + '/dist'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('/uploads/'));

/*app.use('/resources',express.static(__dirname + '/images'));
So now, you can use http://localhost:5000/resources/myImage.jpg to serve all the images instead of http://localhost:5000/images/myImage.jpg. */
// app.use('/', routes);
// app.use('/users', users);
app.use('/get-categories',Tasks);
// app.use('/Students',Students);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
