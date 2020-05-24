module.exports = function(app){
    
    /**
     * Obtain a user from an id passed into the parameters.
     */
    app.get('/user/:id', function(req, res){
        const userId = req.params.id;
        res.send(userId);
    });
}