import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const CategorySchema = mongoose.Schema({

    _id:Number,
    catnm:{
        type:String,
        required:[true, "Name is required"],
        lowercase:true,
        unique:true,
        trim:true
    },
    caticonm:{
        type:String,
        required:[true, "category icon required"],
        trim:true
    }
}) ;

CategorySchema.plugin(uniqueValidator);

const categorySchmaModule = mongoose.model('category_Collection',CategorySchema);

export default categorySchmaModule;