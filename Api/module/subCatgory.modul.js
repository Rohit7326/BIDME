import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";

export var subCategorySchema = mongoose.Schema({
    _id:Number,
    catenm:{
        type:String,
        requried:[true, "Category name is required"],
        lowercase:true,
        trim:true,
    },
    subcatnm:{
        type:String,
        requried:[true, "subCategory name is requried"],
        unique:true,
        lowercase:true,
        trim:true,
    },
    subcaticon:{
        type:String,
        requried:[true, "subCategory Icon is requried"],
        lowercase:true,
        trim:true,
    }
});

subCategorySchema.plugin(UniqueValidator);
var subCategorySchemaModel = mongoose.model('subCategory_collection',subCategorySchema);
export default subCategorySchemaModel;