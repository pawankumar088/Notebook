const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Pawan088:Pawan%407322@record.vs3schz.mongodb.net/iNotebook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo