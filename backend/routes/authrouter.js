const { signupvalidation } = require('../middlewares/authvalidation.cjs');
const { default: login } = require('../models/user');

const router= require('express').Router;



router.post('./login',loginValidation,login);
router.post('./signup',signupValidation, signup);


module.exports= router;