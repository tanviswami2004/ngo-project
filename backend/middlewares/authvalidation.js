import Joi from 'joi';
// // const joi= require('joi');

 const signupvalidation=(req,res,next)=> {
     const schema = joi.object({
         name: joi.string().min(3).max(100).require(),
         email: joi.string().email.require(),
         password: joi.string().min(3).max(100).require()
     });
     const {error}=schema.validate(req.body);
     if(error){
         return res.status(400)
         .json({message: 'bad request',error})
     }
     next();
 }
 const loginvalidation=(req,res,next)=> {
     const schema = joi.object({
         name: joi.string().min(3).max(100).require(),
         email: joi.string().email.require(),
         password: joi.string().min(3).max(100).require()
     });
     const {error}=schema.validate(req.body);
     if(error){
         return res.status(400)
         .json({message: 'bad request',error})
     }
     next();
 }
 module.exports={
     signupvalidation,
    loginvalidation
}
// Import `joi` using ES module syntax
// import Joi from 'joi';
// import { signupvalidation, loginvalidation } from './path-to-this-file.js';


// // Validation for signup
// export const signupvalidation = (req, res, next) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).max(100).required(),
//         email: Joi.string().email().required(),
//         password: Joi.string().min(3).max(100).required()
//     });
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: 'bad request', error });
//     }
//     next();
// };

// // Validation for login
// export const loginvalidation = (req, res, next) => {
//     const schema = Joi.object({
//         name: Joi.string().min(3).max(100).required(),
//         email: Joi.string().email().required(),
//         password: Joi.string().min(3).max(100).required()
//     });
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: 'bad request', error });
//     }
//     next();
// };
