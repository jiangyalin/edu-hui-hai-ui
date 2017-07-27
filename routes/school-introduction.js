var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('school-introduction/school-introduction');
});

module.exports = router;