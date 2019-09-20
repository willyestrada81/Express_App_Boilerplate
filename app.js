var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const methodOverride = require("method-override"); // This is required to make put requests to the DB

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const PORT = process.env.PORT || 5000; 

// view engine setup (EJS) 
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//EXPRESS TO SERVE STATIC FILES
app.use(express.static("public"));
//Import Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Override Method Setup *** Needed for Put Requests
app.use(methodOverride("_method"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// //Mongoose Schema Config setup in the models directory
// // REQUIRE THE DATA MODULES ***EXAMPLE BELLOW*****
// const User = require("./models/users");
// const Comments = require("./models/comments");
// const Blog = require("./models/posts");

// //MONGO DB CONFIG
// const mongoDB = require('./config/keys').MongoURI;

// //CONNECT TO MONGODB USING MONGOOSE
// mongoose.connect(mongoDB, { useNewUrlParser: true })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
