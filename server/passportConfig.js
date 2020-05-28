const mongoose = require('mongoose');
require("./models/User");

const User = mongoose.model("users");
const bcrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy;

module.exports = function initializePassport(passport){
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
    passport.use(new LocalStrategy({usernameField: 'email'}, 
    authenticateUserLocal));

    passport.serializeUser((user, done) => {});
    passport.deserializeUser((id, done) => {});
}


