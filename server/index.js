if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const initializePassport = require('./passportConfig');

// Application keys
const mongoURI = "mongodb+srv://admin:admin@dndmasterapp-cluster-rk8hu.mongodb.net/dnd?retryWrites=true&w=majority";
// MongoDB stuff
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("Mongoose server connected successfully!");
});

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology:true});
require("./models/User");

// Passport stuff
initializePassport(passport);

// Express stuff 
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());

app.listen(port, () => console.log(`DND app server listening at http://localhost:${port}`))

require('./routes')(app);
require('./routes/userRoutes')(app);
require('./routes/characterSheetRoutes')(app);