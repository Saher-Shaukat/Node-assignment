'use strict';
// Import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
// Create schema for a customer
var customerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    gender: {type: String},
    emailId: { type: String, unique: true },
    phoneNumber: { type: Number },
    dob: { type: String },
    password: {type: String},
    created_at: { type: Date, default: Date.now() }
});

// create schema for each product
var productSchema = new Schema({
    productId : {type: Number, unique: true},
    img: {type: String},
    Model: { type: String},
    name: { type: String },
    price: {type: Number},
    description: { type: String }
    
});

var cartProductSchema= new Schema({
    userName:{type: String},
    productName:{type: String},
    qty: {type: Number},
    createdAt: {type: Date,default: Date.now() },
    subtotal: {type: Number},
    img: {type: String},
    Model: { type: String},
    price: {type: Number},
    description: { type: String }

});

 // create model
 var Customer = mongoose.model("customerDetail",customerSchema);
 var Product = mongoose.model("productDetail", productSchema);
 var Cart = mongoose.model("cartDetail", cartProductSchema);
 module.exports = Customer, Product, Cart;