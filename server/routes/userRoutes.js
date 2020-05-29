const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = mongoose.model("users");
const config = require("../auth");

module.exports = function(app){
    app.post('/register', async (req, res)=>{
        const displayName = req.body.displayName;
        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password, because storing hashed passwords is infinitely more secure.

        var user = new User();

        user.displayName = displayName;
        user.email = email;
        user.password = hashedPassword;

        await user.save((err)=>{
            // Error handling for saving user object
            if(err && err.code != 11000){
                console.log("Something went horribly wrong in /testRegister.");
                res.status(500).send("Something went horribly wrong.");
            } else if(err && err.code == 11000){
                console.log("User already exists in /testRegister.");
                res.status(400).send("User already exists with this email.");   
            } else {
                console.log("Creating user...")
                res.status(201).send();
            }
        });
    });

    app.post('/login', async function(req, res, next){
        passport.authenticate('local', function(err, user, info){
            if(err){    // Internal server error
                res.status(500).send(err);
            }
            if(!user){  // User not found or wrong password
                res.status(401).send(info.message);
            } else { // User found!
                // Sign and send a JWT token as a cookie
                var token = jwt.sign({
                    user: {
                        displayName: user.displayName,
                        email: user.email
                    }
                  }, config.jwt.secret, config.jwt.options);

                res.cookie('authtoken', token, config.jwt.cookie);
                res.send({displayName: user.displayName, email: user.email});
            }
        }) (req, res, next)
    });

    app.post("/logout", (req, res, next) => {
        passport.authenticate('jwt', (err, user, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                console.log(info);
                res.status(401).send(info);
            }
            if(user){
                res.cookie('authtoken', '', config.jwt.cookie);
                res.send("Successfully logged out.");
            }
        }) (req, res, next);
    });

    app.get("/current-user", (req, res, next) =>{
        passport.authenticate('jwt', (err, user, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                console.log(info);
                res.status(401).send(info);
            }
            if(user){
                res.send(user);
            }
        }) (req, res, next);
    });
}