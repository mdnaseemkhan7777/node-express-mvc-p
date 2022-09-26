const express = require('express')
const emailListController = require('../controller/emailListController');
const router = express.Router();
router.get('/clientEmailList', emailListController.clientEmailList);
router.post('/updateclientEmailList:id', emailListController.updateclientList);

module.exports = router;