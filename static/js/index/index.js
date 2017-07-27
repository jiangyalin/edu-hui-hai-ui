window.onload = function() {
    var oUl = document.getElementById("g-br-jpg");
    var aLi = oUl.children;
    var oBtn = document.getElementById("g-br-btn-ol");
    var aBtn = oBtn.children;
    var oDiv = document.getElementById('g-banner');
    var ready = true;
    var oPrev=oDiv.children[0];
    var oNext=oDiv.children[1];
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = oUl.children[0].offsetWidth * oUl.children.length + 'px';

    var now = 0;
    for (var i = 0; i < aBtn.length; i++) {
        (function (index) {
            aBtn[i].onclick = function () {
                now = index;
                tab();
            };
        })(i);
    }

    function tab() {
        for (var i = 0; i < aBtn.length; i++) {
            aBtn[i].className = '';
        }
        if (now == 5) {
            aBtn[0].className = 'active';
        } else {
            aBtn[now].className = 'active';
        }
        move(oUl, {left: -now * oUl.children[0].offsetWidth},{fn: function () {
                ready = true;
                if (now == 5) {
                    oUl.style.left = 0;
                    now = 0;
                }
            }
        });


    }

    oNext.onclick = function () {
        if (!ready) return;
        ready = false;
        now++;
        tab();
    };
    oPrev.onclick = function () {
        if (!ready) return;
        ready = false;
        if (now == 0) {
            now = 4;
            oUl.style.left = -oUl.offsetWidth / 2 + 'px';
        } else {
            now--
        }
        tab();
    };

};
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
function move(obj,json,optional){
    optional=optional||{};
    optional.time=optional.time||1000;
    optional.fn=optional.fn||null;
    optional.type=optional.type||'ease-out';
    var start={};
    var dis={};
    for(var key in json){
        start[key]=parseFloat(getStyle(obj,key));
        dis[key]=json[key]-start[key];
    }
    var count=Math.round(optional.time/30);
    var n=0;//第几次

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;
        for(var key in json){
            switch(optional.type){
                case 'linear':
                    var a=n/count;
                    var cur=start[key]+dis[key]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[key]+dis[key]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[key]+dis[key]*(1-a*a*a);
                    break;
            }
            if(key=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity='+cur*100+')';
            }else{
                obj.style[key]=cur+'px';
            }
        }
        if(n==count){

            clearInterval(obj.timer);
            optional.fn && optional.fn();
            console.log('ok');
        }
    },30);

};

