import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";


const productSchema=mongoose.Schema({
    _id:Number,
    ptitle:{
        type:String,
        reuired:[true, "ptitle is required"],
        lowercase:true,
        trim:true,
    },
    catnm:{
        type:String,
        reuired:[true, "catnm is required"],
        lowercase:true,
        trim:true,
    },
    subcatnm:{
        type:String,
        reuired:[true, "subcatnm is required"],
        lowercase:true,
        trim:true,
    },
    pdescription:{
        type:String,
        required:[true, "Product Description required"],
        lowercase:true,
        trim:true,
    },
    baseprice:{
        type:Number, 
        required:[true, "basePrice is required"],
        trim:true,
    },
    picon:{
        type:String, 
        required:[true, "Price is required"],
        trim:true,
    },
    pinfo:String,


});
productSchema.plugin(UniqueValidator);

const productSchemaModel=mongoose.model('product_collection', productSchema);
export default productSchemaModel;