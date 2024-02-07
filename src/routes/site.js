const express = require('express');
const router = express.Router();

const siteControllor = require('../app/controllers/SiteController.js');

router.use('/search', siteControllor.show);
router.use('/', siteControllor.index);

module.exports = router;