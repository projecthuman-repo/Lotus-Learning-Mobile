require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// GET DB KEY FROM DB TEAM. REPLACE ENV WITH SERVER SIDE ENCRYPTION //
mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', () => console.log("Connected to Database"))
.on('error', err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

app.use('/user', require('./routes/user'));

// CHANGE PORT ON IMPLEMENTATION WHEN DEPLOYED
const port = 5000;

app.listen(port, () => {
    console.log('listening to port', port);
});