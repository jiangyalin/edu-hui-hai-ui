var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('sub-pages/school-profile');
});

module.exports = router;