const express = require('express');
const router = express.Router();

const exampleRoutes = require('./examples');
router.use('/examples', exampleRoutes);

module.exports = router;
