const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const customerSchema = new Schema({
    // title: String,
    // summary: String,
    // body: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    age: String,
    country: String,
    gender: String
},{timestamps: true }); 
// Create a model based on that schema
const CustomerSchema = mongoose.model("Customer", customerSchema);
// export the model
module.exports = CustomerSchema;