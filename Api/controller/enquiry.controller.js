import '../module/connection.js';
import  enquriySchemaModel  from '../module/enquiry.module.js';
import url from 'url';


export var save = async(req,res,next)=>{
    var enquryDetails = req.body;
    var enquiryList = await enquriySchemaModel.find()
    var l = enquiryList.length;
    var _id = l == 0 ? 1 : enquiryList[l - 1]._id + 1;
    enquryDetails = { ...enquryDetails, _id: _id};
    try{
      var enquiryAdd = await enquriySchemaModel.create(enquryDetails);
      return res.status(201).json({ "status":true});
    }
    catch(err){
       return res.status(501).json({"status":false})
    }
};


export var fetch = async(req,res,next)=>{
    var mobileU=url.parse(req.url,true).query;
    var enquiryList = await enquriySchemaModel.find({mobile:mobileU.mobile});
    var l= enquiryList.length;
    if(l!=0)
    {
        return res.status(201).json(enquiryList[0].message)
    }
    else{
        return res.status(501).json({"message":"error"});
    }
}


export var Delete = async(req,res,next) =>{
    var email = req.body.email;
    try{
      var enquiryFind = await enquriySchemaModel.find({"email":email})
      if(enquiryFind)
      {
        var enquiryDelete = await enquriySchemaModel.updateOne({"email":email},{$unset:{"message":enquiryFind[0].message}});
        console.log(enquiryDelete);
        if(enquiryDelete)// enquiryDelete.modifiedCount>0
        {
          return res.status(200).json({"message":"feedback deleted"});
        }
        else{
          return res.status(500).json({"message":"Error deleting feedback"});
        }
      }
      else{
        return res.status(404).json({"message":"feedback not found"});
      }
    }
    catch(err){
      return res.status(500).json({"message":"server error"});
    }
  }