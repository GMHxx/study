/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-1
 * Time: 上午8:21
 * To change this template use File | Settings | File Templates.
 */

//对元素进行定位
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    //2秒后执行该函数
    movement=setTimeout("moveMessage()",2000);
}

addLoadElement(positionMessage);