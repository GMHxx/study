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
    //5秒后执行该函数
    //movement=setTimeout("moveMessage()",2000);

    //调用通用元素移动函数
    moveElement("message",125,25,20);

    if(!document.getElementById("message2")) return false;
    var elem=document.getElementById("message2");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="50px";
    moveElement("message2",125,125,20);
}

addLoadElement(positionMessage);