/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-3-23
 * Time: 下午7:18
 * To change this template use File | Settings | File Templates.
 */
function doMove(obj,attr,dir,target,endFn){
    dir = parseInt(getStyle(obj,attr))<target? dir:-dir; // 控制方向
    clearInterval(obj.timerid);
    obj.timerid=setInterval(function(){
        var pos = parseInt(getStyle(obj,attr)) + dir;  // 每次运动多少
        if(pos > target && dir >0) { // 向左运动
            pos= target;
        }
        if(pos < target && dir <0){ // 向右运动
            pos = target;
        }
        obj.style[attr] = pos + 'px';
        if(pos==target){ // 到达目标后，执行回调函数的条件
           clearInterval(obj.timerid);
           endFn&&endFn();
        }
    },30)
}
function clone(oLi,oUl,aLiWidth){
    //parent = oldEl.parentNode;
    oClone = oLi[0].cloneNode(true); // 使用内置的 cloneNode
    oUl.appendChild(oClone);
    oUl.style.width = aLiWidth*(oLi.length+1);
}
function clone2(oLi,oUl,aLiWidth){
    //parent = oldEl.parentNode;
    oClone = oLi[oLi.length-1].cloneNode(true); // 使用内置的 cloneNode
    oUl.insertBefore(oClone,oLi[0]);
    oUl.style.width = aLiWidth*(oLi.length+1);
}

window.onload = function(){
    var oUl = get.byId('ul');
    var oLi = get.byTagName("li",oUl);
    var aLiWidth = oLi[0].offsetWidth;
    var oBtLeft = get.byId('LeftBtn');
    var oBtRight = get.byId("RightBtn");
    var oBtLBg = get.byId('buttonL');
    var oBtRBg = get.byId('buttonR');
    var _imgNow = 0;
    var _now = 0;

    oBtLBg.onmouseover = function(){
        oBtLeft.style.display = "block";
    }
    oBtLBg.onmouseout = function(){
        oBtLeft.style.display = "none";
    }
    oBtRBg.onmouseover = function(){
        oBtRight.style.display = "block";
    }
    oBtRBg.onmouseout = function(){
        oBtRight.style.display = "none";
    }

    oBtRight.onclick = function(){  //向右走
        if(_now==oLi.length-1){     //当前画面是最后一个
            clone(oLi,oUl,aLiWidth);
            _now = 0;
        }
        else _now++;
        _imgNow++;
        doMove(oUl,'left',100,-aLiWidth*_imgNow,function(){
            if(_now==0){
                oUl.removeChild(oUl.lastElementChild);
                oUl.style.left=0;
                _imgNow=0;
            }

        });
    }
    oBtLeft.onclick = function(){//向左走
        if(_now==0){
            clone2(oLi,oUl,aLiWidth);
            oUl.style.left = -990 + 'px';
            _now = oLi.length-1;
            _imgNow ++;
        }
        else _now--;
        _imgNow--;
        doMove(oUl,'left',100,-aLiWidth*_imgNow,function(){
            if(_now==oLi.length-1){
                oUl.removeChild(oUl.firstElementChild);
                oUl.style.left =aLiWidth*(oLi.length-1)+ 'px';
                _imgNow= oLi.length-1;
                _now = oLi.length-1;
            }
        });
    }

   /*---------------------------------------------------*/
    var oUl2 = get.byId('wrap');
    var oLi2 = get.byTagName("li",oUl2);
    var aLiWidth2 = oLi2[0].offsetWidth;
    var oBtnWrapL = get.byId('btnWrapL');
    var oBtnWrapR = get.byId("btnWrapR");
    var now = 0;
    var imgNow = 0;

    oBtnWrapR.onclick = function(){  //向右走
        if(now==oLi2.length-1-4){     //当前画面是最后一个
            clone(oLi2,oUl2,aLiWidth2);
            now = 0;
        }
        else now++;
        imgNow++;
        doMove(oUl2,'left',40,-aLiWidth2*imgNow,function(){
            if(now==0){
                oUl2.removeChild(oUl2.lastElementChild);
                oUl2.style.left=0;
                imgNow=0;
            }
        });
    }
    oBtLeft.onclick = function(){//向左走
        if(_now==0){
            clone2(oLi,oUl,aLiWidth);
            oUl.style.left = -990 + 'px';
            _now = oLi.length-1;
            _imgNow ++;
        }
        else _now--;
        _imgNow--;
        doMove(oUl,'left',100,-aLiWidth*_imgNow,function(){
            if(_now==oLi.length-1){
                oUl.removeChild(oUl.firstElementChild);
                oUl.style.left = -aLiWidth*(oLi.length-1) + 'px';
                _imgNow= oLi.length-1;
                _now = oLi.length-1;
            }
        });
    }

    /*------------------------------------------------*/
    var oUl3 = get.byId('share');
    oUl3.onmouseover = function(){
        doMove(oUl3,'right',50,0,function(){});
    }
    oUl3.onmouseout = function(){
        doMove(oUl3,'right',50,-191,function(){});
    }
}
