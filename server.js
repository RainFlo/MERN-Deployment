const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors(), express.json(), express.urlencoded({extended: true}));

require('./server/routes/pirate.routes')(app);
require('./server/config/mongoose.config');


app.listen(8000, () => console.log("Listening on port 8000"));