import "../module/connection.js";
import categorySchmaModule from "../module/category.module.js";
import url from 'url';
import rs from 'randomstring';
import path from 'path';
//import userSchemaModel from "../module/user.registraion.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
export var save = async(req,res,next)=>{

    var categoryDetails = req.body;
    // console.log(categoryDetails);
    var fileobj = req.files.caticonm;
    let key = rs.generate();
    var caticonm = Date.now()+'-'+key+'-'+fileobj.name;
    categoryDetails.caticonm=caticonm;
    // console.log(categoryDetails);
    // console.log(req.files);
    // console.log(fileobj);
    // console.log(req.files);
    // console.log(caticonm);
    var cList = await categorySchmaModule.find();
    var l=cList.length;
    
    console.log(l);
    var _id=l==0?1:cList[l-1]._id+1;
    categoryDetails={...categoryDetails,"_id":_id}


    try{
        var category = await categorySchmaModule.create(categoryDetails);
        var file_path_url = path.join(__dirname,'../../front/public/assets/upload/caticonm',caticonm);
        fileobj.mv(file_path_url)//is system me file jha bhi exits karti hai vha se copy krke jo pathe denge vha pr paste kr dega
        return res.status(201).json({message:"category succesful added"});
    }
    catch{
        return res.status(500).json({message:"error"});
    }
    //console.log(categoryDetails);
}
export var fetch = async(req,res,next)=>{
    var category_fetch=url.parse(req.url,true).query;   // key and value give in a body
    console.log(category_fetch)
    var category_list=await categorySchmaModule.find(category_fetch);
    console.log(category_list)
    var l=category_list.length;
    try{
        if(l!=0)
        {
            return res.status(201).json(category_list);
        }
        else{
            return res.status(500).json({"message":"Data not found"});
        }
    }
    catch{
        return res.status(501),json({"message":"server error"});
    }

}

export var Delete = async(req,res,next)=>{
    var categorDeatils = req.body

    //console.log(categoryId)
    try{
        var categoryFind = await categorySchmaModule.find(categorDeatils);
        console.log(categoryFind);
        if(categoryFind.length!=0)
        {
            var categoryDelete = await categorySchmaModule.deleteOne(categorDeatils);
            console.log(categoryDelete);
            return res.status(200).json({"message":"category delete succefully"});
        }
        else{
            return res.status(404).json({"messge":"categorey not found"});
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({"message":"server error"});
    }

}

export var update = async (req, res, next) => {
    var categoryDetails = req.body.condition_obj;
    var contentObj = req.body.content_obj;

    try {
        const categoryFind = await categorySchmaModule.findOne(JSON.parse(categoryDetails));

        if (categoryFind) {
            const categoryUpdate = await categorySchmaModule.updateOne(JSON.parse(categoryDetails), { $set: JSON.parse(contentObj) });

            if (categoryUpdate.modifiedCount > 0) {
                return res.status(201).json({ "msg": "categorey Successfully updated" });
            } else {
                return res.status(200).json({ "msg": "No modifications made" });
            }
        } else {
            return res.status(404).json({ "error": "Requested resource not available" });
        }
    } catch (error) {
        console.error(error); // Log the error for investigation
        return res.status(500).json({ "error": "Server Error" });
    }
};
     