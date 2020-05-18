const mongoose = require('mongoose');

const helpSchema = mongoose.Schema({
    name: String,
    email: String,
    data: Date,
    massage: String
}, { versionKey: false });

const Help = mongoose.model('supports', helpSchema);

module.exports = { Help }
