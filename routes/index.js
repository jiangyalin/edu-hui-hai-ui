//入口
module.exports = function (app) {
    app.get("/",function (req, res) {
        res.redirect('/index');//更改请求路径
    });
    
    app.get('/index',function (req,res) {
        res.render('index');//返回index.ejs
    });

    app.use('/school-introduction',require('./school-introduction'));
    app.use('/teacher-development',require('./teacher-development'));
    app.use('/live-independently',require('./live-independently'));

    /*子页面*/
    app.use('/school-profile',require('./school-profile'));
    /*详情页*/
    app.use('/detail',require('./detail'));
};