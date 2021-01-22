const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/piratedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Somethong went wrong when connecting to the database", err));