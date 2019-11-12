const express = require('express');
const router = express.Router();
const exampleCtrl = require('../controllers/exampleCtrl');

router.get('/', exampleCtrl.getExample);

module.exports = router;
