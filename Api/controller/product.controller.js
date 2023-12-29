import '../module/connection.js';
import productSchemaModel from '../module/product.modul.js';
import url from 'url';



export var save = async (req, res, next) => {
  var productDetail = req.body;
  var productList = await productSchemaModel.find();
  console.log(productList);
  var l = productList.length;
  console.log(l);
  var _id = l == 0 ? 1 : productList[l - 1]._id + 1;

  productDetail = { ...productDetail, _id: _id, pinfo:Date()};
  try{
      var createProduct = await productSchemaModel.create(productDetail);
      return res.status(201).json({ "status":true});
}
catch(err){
  console.log(err);
  return res.status(501).json({"status":false})
}
};

export var fetch = async(req,res,next)=>{
    var productFetch = url.parse(req.url,true).query;
    var productList = await productSchemaModel.find(productFetch);
    var l=productList.length;

    if(l!=0)
    {
        return res.status(201).json(productList);
    }
    else{
        return res.status(501).json({message:"product not found"});
    }
}
 
export var update = async (req,res,next)=>{
  var productDetail = req.body.condition_obj;
  var contentObj = req.body.content_obj;

    try{
      var productFind = await productSchemaModel.find(JSON.parse(productDetail));
      if(productFind)
      {
        let productUpdated = await productSchemaModel.updateOne(JSON.parse(productDetail),{$set:JSON.parse(contentObj)});
          if(productUpdated.modifiedCount>0)
           {
             return res.status(200).json({"message":"product succesfully updated"});
           }
           else{
            return res.status(200).json({"message":"product already succesfully updated"});
           }
      }
      else{
        return res.status(404).json({"message":"product not found"});
      }
    }
    catch{
      return res.status(501).json({"message":"server error"});
    }
}

export var Delete = async(req,res,next) =>{
  var productDetails = req.body;
  
  try{
    var productFind = await productSchemaModel.find(productDetails)
    if(productFind)
    {
      var productDelete = await productSchemaModel.deleteMany(productDetails);
      if(productDelete.deletedCount>0)
      {
        return res.status(200).json({"message":"Product deleted"});
      }
      else{
        return res.status(500).json({"message":"Error deleting product"});
      }
    }
    else{
      return res.status(404).json({"message":"product not found"});
    }
  }
  catch{
    return res.status(500).json({"message":"server error"});
  }
}