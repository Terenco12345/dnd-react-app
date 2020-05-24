const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => console.log(`DND app listening at http://localhost:${port}`))

// Get all the routes from ./route
require('./routes')(app);
require('./routes/userRoutes')(app);