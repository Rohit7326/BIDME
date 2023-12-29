import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    maxLength: 10,
    minLength: 5,
    trim: true,
  },
  mobile: {
    type: Number,
    required: [true, 'Mobile Number is required'],
    maxLength: 10,
    minLength: 10,
    trim: true,
  },
  address: {
    type: String,
    //required:[true,"Address is required"],
    trim: true,
  },
  city: {
    type: String,
    //required:[true,"cit is required"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, 'gender is required'],
  },
  role: String,
  Status: Number,
  info: String,
});

userSchema.plugin(uniqueValidator);

const userSchemaModel = mongoose.model('user_collection', userSchema);

export default userSchemaModel;
