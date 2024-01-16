const joi = require('joi');
const { join } = require('path');

const paswordSchema = joi.string().min(3).max(10).alphanum();
console.log(paswordSchema.validate);