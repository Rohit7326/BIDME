import mongoose from 'mongoose';
var mongod='mongodb://127.0.0.1:27017/Biding';
mongoose.connect(mongod);
console.log("Database succesful connected");
