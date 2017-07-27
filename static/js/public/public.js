$(function () {

    //计算满屏
    $(".g-bd").css("min-height",(window.innerHeight-240)+"px");
    $(window).resize(function () {
        $(".g-bd").css("min-height",(window.innerHeight-240)+"px");
    })

});