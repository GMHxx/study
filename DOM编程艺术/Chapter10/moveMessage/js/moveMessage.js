/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-1
 * Time: 上午8:27
 * To change this template use File | Settings | File Templates.
 */

//移动元素
function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem=document.getElementById("message");
    //elem.style.left="200px";

    //获取元素位置的数值（整型）
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    //比较元素的位置，若未到达指定位置，则再移动1个像素
    if(xpos==200&&ypos==100){
        return true;
    }
    if(xpos<200){
        xpos++;
    }
    if(xpos>200){
        xpos--;
    }
    if(ypos<100){
        ypos++;
    }
    if(ypos>100){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    //每10毫秒调用一次函数
    movement=setTimeout("moveMessage()",10);
}

//addLoadElement(moveMessage);