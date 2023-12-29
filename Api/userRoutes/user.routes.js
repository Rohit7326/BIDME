import express from 'express';
//import { Save } from '../controller/user.controller.js';
import * as userController from '../controller/user.controller.js';
import * as categoryController from '../controller/category.controller.js';
import * as productController from '../controller/product.controller.js';
import * as subCategoryController from '../controller/subCategory.controller.js';

import * as enquryController from '../controller/enquiry.controller.js';
const router = express.Router();

// its a user routes
router.post('/user/registration', userController.registration);
router.get('/user/fetch', userController.fetch);
router.get('/user/:id', userController.getuserById);
router.post('/user/login', userController.login);
router.delete('/user/delete',userController.Delete);
router.patch('/user/update',userController.userUpdate);
//  its a category routes
router.post('/category/save', categoryController.save);
router.get('/category/fetch', categoryController.fetch);
router.delete('/category/delete', categoryController.Delete)
router.patch('/category/update', categoryController.update)

//its a product routes
router.post('/product/save', productController.save);
router.get('/product/fetch', productController.fetch);
router.patch('/product/update', productController.update);
router.delete('/product/delete', productController.Delete);

// its a subCategory routes
router.post('/subcategory/save', subCategoryController.save);
router.get('/subcategory/fetch', subCategoryController.fetch);
router.patch('/subcategory/update', subCategoryController.update);
router.delete('/subcategory/delete', subCategoryController.Delete);


// its enquriy routes

router.post('/enqury/save', enquryController.save);
router.get('/enqury/fetch',enquryController.fetch);
router.delete('/enqury/delete',enquryController.Delete);
export default router;
