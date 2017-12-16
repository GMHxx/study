/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-1
 * Time: 上午10:41
 * To change this template use File | Settings | File Templates.
 */

//通用元素移动函数(ID,横坐标，纵坐标，时间)
function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    if(elem.movement){
        //复位movement属性
        clearTimeout(elem.movement);
    }
    //若该元素无位置信息，则创建位置信息
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }

    //需要比较，该变量必须为数
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist=0;
    if(xpos==final_x && ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        //向大于方向取整
        dist=Math.ceil((final_x-xpos)/10);
        xpos=xpos+dist;
    }
    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/10);
        xpos=xpos-dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((final_y-ypos)/10);
        ypos=ypos+dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((ypos-final_y)/10)
        ypos=ypos-dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    //创建movement属性
    elem.movement=setTimeout(repeat,interval);
}