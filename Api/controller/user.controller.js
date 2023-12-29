import { response } from 'express';

/*export var controller={
    save:(request,response)=>{
    console.log(request.body)
}
}*/
import '../module/connection.js';
import userSchemaModel from '../module/user.registraion.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import sendMailAPI from './email.controller.js';
//import nodemailer from 'nodemailer';
//let key= rs.generate();

export var registration = async (req, res, next) => {
  var userDetails = req.body;
  console.log(req.body);
  var userList = await userSchemaModel.find();
  var l = userList.length;
  var _id = l == 0 ? 1 : userList[l - 1]._id + 1;
  userDetails = {
    ...userDetails,
    _id: _id,
    Status: 0,
    role: 'user',
    info: Date(),
  };

  try {
    var user = await userSchemaModel.create(userDetails);
    var result = sendMailAPI(user.email, user.password);
    console.log(result);
    return res.status(201).json({ status: true });
  } catch {
    return res.status(500).json({ status: false });
  }
};

export var login = async (req, res, next) => {
  var userDetails = req.body;
  console.log(userDetails);
  userDetails = { ...userDetails, Status: 1 };
  var userList = await userSchemaModel.find(userDetails);
  var l = userList.length;
  console.log(userDetails);
  console.log(userList);
  console.log(l);

  if (l != 0) {
    let payload = { subject: userList[0].email };
    console.log(payload);
    let key = rs.generate();
    let token = jwt.sign(payload, key);
    console.log(token);
    //const jwt = require('jsonwebtoken');
    // var expirationTime = 60*60*24;
    // const token = jwt.sign(
    // { sub: userList[0].email, iat: Date.now(), exp: Math.floor(Date.now() / 1000) + expirationTime },
    // key
    //);
    //console.log(key)
    //console.log(token.split('.'))
    return res.status(201).json({ token: token, userDetails: userList[0] });
  } else {
    return res.status(501).json({ token: 'error' });
  }
};

//     export var fetch = async (req, res, next) => {
//     // Extract the token from the request headers
//     const token = req.header('Authorization');

//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Verify the token
//     jwt.verify(token, key, async (err, user) => {
//       if (err) {
//         return res.status(403).json({ message: 'Token is invalid or expired' });
//       }

//       // Check the token's expiration
//       const currentTimestamp = Date.now() / 1000; // Convert to seconds
//       if (user.exp <= currentTimestamp) {
//         return res.status(403).json({ message: 'Token has expired' });
//       }

//       // Token is valid and not expired, you can proceed to fetch data
//       var condition_object = url.parse(req.url, true).query;
//       var userList = await userSchemaModel.find();
//       var l = userList.length;

//       if (l !== 0) {
//         return res.status(201).json(userList);
//       } else {
//         return res.status(501).json({ message: 'error' });
//       }
//     });
//   };

export const userUpdate = async (req, res) => {
  // console.log(JSON.parse(req.body))
  console.log(req.body);
  let conditionObj = req.body.condition_obj;

  let contentObj = req.body.content_obj;
  console.log('conditionObj         ', conditionObj);
  console.log('contentObj is       ', contentObj);

  // so in a postman we give id and also updated value in a body select  row type json
  //const userId = req.query.id; // so in a postman we give id in a param and updated filed give in a body select row type json
  //console.log(userId);

  try {
    let userDetails = await userSchemaModel.find(conditionObj);
    console.log(userDetails);
    // console.log(userDetails.length)
    if (userDetails.length > 0) {
      console.log('test');

      var user_update = await userSchemaModel.updateOne(conditionObj, {
        $set: contentObj,
      });
      console.log('userupdate2');
      console.log(user_update);
      if (user_update.modifiedCount > 0) {
        return res
          .status(200)
          .json({ msg: 'User details updated successfully' });
      }
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error); // Log the error for investigation
    return res.status(500).json({ error: 'Server Error' });
  }
};

export var Delete = async (req, res, next) => {
  var _id = req.body._id; // If sending the email in the request body, select the Body tab in Postman,
  // choose raw, select JSON (application/json), and add a JSON object like {"email": "user@example.com"}.

  //var email=req.query.email;   //If sending the email as a query parameter, select the Params or Query Params
  // section in Postman and input the key-value pair, e.g., email with the corresponding value.
  console.log(_id);

  if (!_id) {
    return res.status(400).json({ message: 'Email not provided' });
  }

  try {
    var user = await userSchemaModel.findOne({ _id: _id });

    if (user) {
      var result = await userSchemaModel.deleteMany({ _id: _id });
      console.log(result);
      if (result.deletedCount > 0) {
        return res
          .status(200)
          .json({ message: 'All user data deleted successfully' });
      } else {
        return res.status(500).json({ message: 'Error deleting user data' });
      }
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error); // Log the error for investigation
    return res.status(500).json({ message: 'Server error' });
  }
};

export const fetch = async (req, res, next) => {
  const condition_object = req.query;
  console.log(condition_object);
  var userList = await userSchemaModel.find(condition_object);
  console.log(userList)
  var l = userList.length;
  if (l != 0) {
    return res.status(201).json(userList);
  } else {
    return res.status(501).json({ message: 'error' });
  }
};

export const getuserById = async (req, res) => {
  console.log('hdgfhdgf');
  const condition_object = req.params.id;
  
  var userList = await userSchemaModel.findById(condition_object);

  res.status(200).send({ data: userList });
};
