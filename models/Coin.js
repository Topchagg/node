const mongoose = require('mongoose');
const CoinSchema = new mongoose.Schema({
 country: { type: String, unique: true, required: true },
 nominal: { type: Number, required: true },
 price: {type:Number, required:true },
 year: {type:Number,required:true}
 });
module.exports = mongoose.model('Coin', CoinSchema);