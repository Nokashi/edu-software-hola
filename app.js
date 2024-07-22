const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./models/user');
const flash = require('connect-flash');
require('dotenv').config();


async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/edu-software-hola')
  // mongoose.connect(process.env.MONGO_URI)
}

// connect DB 
connectDB();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



// import routers

const landingRouter = require('./routes/landing');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const quizzesRouter = require('./routes/quizzes');
const authRouter = require('./routes/auth');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: 'cat keyboard meow',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});


// AUTHENTICATION SETUP
// %%%%%%%%%%%%%%%
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {  
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  next();
});
// %%%%%%%%%%%%%%%

app.use('/', landingRouter);
app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/quizzes', quizzesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("All Good!")
module.exports = app;
