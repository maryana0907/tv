const mongoose = require('mongoose');

const zakazTvSchema = mongoose.Schema({
    name: String,
    email: String,
    idTv: Number,
    prise: Number
}, { versionKey: false });

const ZakazTv = mongoose.model('zakaztvs', zakazTvSchema);

module.exports = { ZakazTv }
