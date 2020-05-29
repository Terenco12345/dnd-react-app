const passport = require('passport');

module.exports = function(app){
    app.use("/character-sheet-gallery/test", (req, res, next) => {
        passport.authenticate('jwt', (err, user, info)=>{
            if(err){
                res.status(500).send(err);
            }
            if(info){
                res.status(401).send(info);
            }
            if(user){
                res.send(user);
            }
        }) (req, res, next);
    });
}

