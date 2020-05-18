const mongoose = require('mongoose');

const Film = mongoose.Schema({ name: {type: String}, canalls: Number, hd: Number });
const tvSchema = mongoose.Schema({
    name: String,
    id: Number,
    prise: Number,
    films: [Film],

}, { versionKey: false });

const TV = mongoose.model('tvs', tvSchema);

module.exports = { TV }
