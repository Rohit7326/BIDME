import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './userRoutes/user.routes.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';
//import categoryRouters from './userRoutes/category.router.js'
const app= express()
//to resolve cross origin problem
app.use(cors());

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//to handle request file content
app.use(fileUpload());
app.use('/', userRoutes); 


//app.use('/category', userRoutes);

app.listen(3000)

console.log("SERVER INVOKED ON PORT 3001");
