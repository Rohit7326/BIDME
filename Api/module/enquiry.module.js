import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const enquriySchema = mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"Name is required"],
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        lowercase:true,
        trim:true,
    },
    mobile:{
        type:Number,
        required:[true,"mobile is required"],
        unique:true,
        maxLength:10,
        minLength:10,
        lowercase:true,
        trim:true,
    },
    message:{
        type:String,
        required:[true,"message is required"],
        lowercase:true,
        trim:true,
    }
});

enquriySchema.plugin(uniqueValidator);
var enquriySchemaModel = mongoose.model("enqury_collection",enquriySchema);
export default enquriySchemaModel
