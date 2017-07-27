var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('eagles-independently/live-independently');
});

module.exports = router;