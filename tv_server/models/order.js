const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: String,
    packName: String,
    massage: String,
    email: String,
    prise: Number,
    add: String
}, { versionKey: false });

const Order = mongoose.model('orders', orderSchema);

module.exports = { Order }
