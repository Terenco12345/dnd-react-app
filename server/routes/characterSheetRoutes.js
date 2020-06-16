const mongoose = require("mongoose");
const passport = require('passport');
const User = mongoose.model("users");
const CharacterSheet = mongoose.model("characterSheets");

module.exports = function (app) {
    /**
     * Retrieval of all character sheets attached to authenticated user
     */
    app.get("/character-sheet/all", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                await CharacterSheet.find({ ownerEmail: tokenContent.user.email }).then((sheets) => {
                    res.send(sheets);
                }).catch((err)=>{
                    res.status(500).send(err);
                })
            }
        })(req, res, next);
    });

    /**
     * Retrieval of one character sheet by ID
     */
    app.get("/character-sheet/:id", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                await CharacterSheet.findById(req.params.id).then((sheet) => {
                    res.send(sheet);
                }).catch((err)=>{
                    res.status(500).send(err);
                })
            }
        })(req, res, next);
    });

    /**
     * Creation of new character sheet
     */
    app.post("/character-sheet/new", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                if(tokenContent.user.email != req.body.ownerEmail){
                    res.status(500).send("Email attached to this character sheet does not match authentication!");
                    return;
                }
                
                try {
                    var characterSheet = new CharacterSheet(req.body);
                    await characterSheet.save((err, doc) => {
                        // Error handling for saving user object
                        if (err && err.code != 11000) {
                            console.log("Something went horribly wrong in /character-sheet/new");
                            res.status(500).send("Something went horribly wrong.");
                        } else if (err && err.code == 11000) {
                            console.log("Uniqueness error with character sheet.");
                            res.status(400).send("Uniqueness error with character sheet.");
                        } else {
                            console.log("Creating character sheet...")
                            res.status(201).send(doc);
                        }
                    });
                } catch (error) {
                    res.status(500).send(error);
                }

            }
        })(req, res, next);
    });

    /**
     * Update of character sheet by ID
     */
    app.post("/character-sheet/:id", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                try {
                    await CharacterSheet.findOneAndUpdate({ _id: req.params.id, ownerEmail: tokenContent.user.email }, req.body).then((sheet) => {
                        res.send(sheet);
                    }).catch((err) => {
                        res.status(500).send(err);
                    });
                } catch (error) {
                    res.status(500).send(error);
                }

            }
        })(req, res, next);
    });

    /**
     * Deletion of character sheet by ID
     */
    app.delete("/character-sheet/:id", (req, res, next) => {
        passport.authenticate('jwt', async (err, tokenContent, info) => {
            if (err) {
                res.status(500).send(err);
            }
            if (info) {
                res.status(401).send(info);
            }
            if (tokenContent) {
                await CharacterSheet.findOneAndDelete({ _id: req.params.id, ownerEmail: tokenContent.user.email }).then((sheet) => {
                    res.send(sheet);
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        })(req, res, next);
    });
}

