const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  date_listed: {
    type: Date,
    default: Date.now,
  },
  user_rating: {
    type: Number,
    default: 0,
  },
  mrp: {
    type: Number,
    required: true,
  },
  sp: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  free_del: {
    type: Boolean,
    default: false,
  },
  assured: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Product", productSchema);
