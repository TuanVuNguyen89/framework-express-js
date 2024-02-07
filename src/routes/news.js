const express = require('express');
const router = express.Router();

const newsControllor = require('../app/controllers/NewsController.js');

router.use('/:slug', newsControllor.show);
router.use('/', newsControllor.index);

module.exports = router;