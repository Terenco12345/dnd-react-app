const mongoose = require('mongoose');
require("./models/User");

const User = mongoose.model("users");
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./auth');

module.exports = function initializePassport(passport){
    var cookieExtractor = function(req) {
        var token = null;
        if (req && req.signedCookies)
        {
            token = req.signedCookies['authtoken'];
        }
        return token;
    };

    const authenticateUserLocal = async (email, password, done) => {
        try {
            const user = await User.findOne({email: email});
            if(user){
                // User found - Let's check the password
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(result){
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password incorrect.'});
                    }
                })
            } else {
                // User not found.
                return done(null, false, {message: 'User with this email not found.'})
            }
        } catch (error) {
            return done(err);
        }
    };

    // Passport Stuff
    passport.use(new LocalStrategy({usernameField: 'email', session: false}, 
    authenticateUserLocal));
    passport.use(new JwtStrategy({secretOrKey: config.jwt.secret, jwtFromRequest: cookieExtractor}, (payload, done) => {
        console.log(payload);
        return done(null, payload);
    }));
}

