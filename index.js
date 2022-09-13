const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {generateMongooseURI} = require('./app/services/database/config.service');
const indexRoute = require('./app/routes/index');
const usersRoute = require('./app/routes/users');
require('./app/services/passport/passport.service')

// app configurations 
const PORT = process.env.PORT;
const APP_ENV = process.env.APP_ENV;

// database configurations
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE_CLUSTER = process.env.DATABASE_CLUSTER
const mongooseURI = generateMongooseURI({
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_CLUSTER
});

// create express app --
const app = express();

// middlewares --
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'))

// routers
app.use("/", indexRoute);
app.use('/users', usersRoute);

// connect to database, and start listening to app
mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((err, db) => {app.listen(PORT, () => console.log(`Listening to port ${PORT}`))})
  .catch((err) => console.error(err));  