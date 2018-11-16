var express = require('express');
var routers = express.Router();
var detail = require('../controllers/detail');

routers.get('/detail', detail.show);




module.exports = routers;