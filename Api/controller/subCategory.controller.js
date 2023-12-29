import '../module/connection.js';
import subCategorySchemaModel from '../module/subCatgory.modul.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

var __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save = async (req, res, next) => {
  var subCategoryDetail = req.body;
  let fileobj=req.files.subcaticon;
  var key =rs.generate();
  var subcaticon = Date.new()+"-"+key+'-'+fileobj;
  subCategoryDetail.subcaticon=subcaticon; 
  var subCategoryList = await subCategorySchemaModel.find();
  //console.log(subCategoryList);
  var l = subCategoryList.length;
  //console.log(l);
  var _id = l == 0 ? 1 : subCategoryList[l - 1]._id + 1;
  console.log(_id);
  //var _id = l==0?1:subCategoryList[l-1]._id+1;
  subCategoryDetail = { ...subCategoryDetail, _id: _id };
  //console.log(subCategoryDetail);
  try {
    var result = await subCategorySchemaModel.create(subCategoryDetail);
    //console.log(result);
    var file_path_url = path.join(__dirname,'../../front/public/assets/upload/subcaticonm',subcaticon);
        fileobj.mv(file_path_url)
    return res.status(201).json({ messagse: 'subCategory succesfully added' });
  } catch (err) {
    //console.log(err);
    return res.status(500).json({ status: false });
  }
};

export var fetch = async (req, res, next) => {
  var subCategoryDetail = url.parse(req.url, true).query;
  try {
    var subCategoryFind = await subCategorySchemaModel.find(subCategoryDetail);
    if (subCategoryFind.length != 0) {
      return res.status(200).json(subCategoryFind);
    } else {
      return res.status(404).json({ message: 'Resource not found' });
    }
  } catch {
    return res.status(500).json({ message: 'server error' });
  }
};

export var update = async (req, res, next) => {
  var subCategoryDetail = req.body.condition_obj;
  var contentObj = req.body.content_obj;

  try {
    const subCategoryFind = await subCategorySchemaModel.findOne(
      JSON.parse(subCategoryDetail)
    );

    if (subCategoryFind) {
      const subCategoryUpdate = await subCategorySchemaModel.updateOne(
        JSON.parse(subCategoryDetail),
        { $set: JSON.parse(contentObj) }
      );
      console.log(subCategoryUpdate);
      if (subCategoryUpdate.modifiedCount > 0) {
        return res
          .status(200)
          .json({ message: 'Subcategory successfully updated' });
      } else {
        return res.status(200).json({ message: 'No modifications made' });
      }
    } else {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
  } catch (err) {
    console.error(err); // Log the error for investigation
    return res.status(500).json({ message: 'Server error' });
  }
};

export var Delete = async (req, res, next) => {
  var subCategoryDetail = req.body;

  try {
    var subCategoryFind = await subCategorySchemaModel.find(subCategoryDetail);
    if (subCategoryFind.length != 0) {
      let subCategoryDelete = await subCategorySchemaModel.deleteMany(
        subCategoryDetail
      );
      if (subCategoryDelete.deletedCount > 0) {
        return res
          .status(200)
          .json({ message: 'subCategory successfully Deleted' });
      }
      // else{
      //     return res.status(200).json({"message":"subCategory already Deleted"});
      // }
    } else {
      return res.status(404).json({ message: 'subCategort Not Found' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
};
