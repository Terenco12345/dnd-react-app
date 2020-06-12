const mongoose = require("mongoose");
const passport = require('passport');
const User = mongoose.model("users");
const CharacterSheet = mongoose.model("characterSheets");

module.exports = function(app){
    app.get("/character-sheet/all", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                res.status(401).send(info);
            }
            if(tokenContent){
                await CharacterSheet.find({ ownerEmail: tokenContent.user.email }).then((sheets)=>{
                    res.send(sheets);
                })
            }
        }) (req, res, next);
    });

    app.post("/character-sheet/new", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                res.status(401).send(info);
            }
            if(tokenContent){
                var characterSheet = new CharacterSheet();
                characterSheet.ownerEmail = tokenContent.user.email;
                await characterSheet.save((err) => {
                    // Error handling for saving user object
                    if (err && err.code != 11000) {
                        console.log("Something went horribly wrong in /character-sheet/new");
                        res.status(500).send("Something went horribly wrong.");
                    } else if (err && err.code == 11000) {
                        console.log("Uniqueness error with character sheet.");
                        res.status(400).send("Uniqueness error with character sheet.");
                    } else {
                        console.log("Creating character sheet...")
                        res.status(201).send();
                    }
                });
            }
        }) (req, res, next);
    });

    app.delete("/character-sheet/:id", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                res.status(401).send(info);
            }
            if(tokenContent){
                await CharacterSheet.findOneAndDelete({_id: req.params.id, ownerEmail: tokenContent.user.email}).then((sheet) => {
                    res.send(sheet);
                }).catch((err)=>{
                    res.status(500).send(err);
                });
            }
        }) (req, res, next);
    });
}

