const express = require('express'), path = require('path');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/tv";

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/api/help', require('./router/help'));
app.use('/api/tv', require('./router/tvPacket'));
app.use('/api/order', require('./router/order'));

app.listen(3000, () => {
    console.log(3000);
});
