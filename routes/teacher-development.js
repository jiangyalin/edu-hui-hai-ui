var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('teacher-development/teacher-development');
});

module.exports = router;