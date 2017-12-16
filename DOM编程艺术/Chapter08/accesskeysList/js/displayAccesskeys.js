/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-30
 * Time: 上午9:29
 * To change this template use File | Settings | File Templates.
 */

//快捷键列表
function displayAccesskeys(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    var link=document.getElementsByTagName("a");
    var akeys=new Array();

    //将链接中的内容和accesskey属性一一对应保存到数组中
    for(var i=0;i<link.length;i++){
        var current_link=link[i];
        if(!current_link.getAttribute("accesskey")) continue;
        var key=current_link.getAttribute("accesskey");
        var text=current_link.lastChild.nodeValue;
        akeys[key]=text;
    }

    //建立一个快捷键列表
    var list=document.createElement("ul");
    for(key in akeys){
        var text=akeys[key]
        var str=key+":"+text;
        var item=document.createElement("li");
        var item_text=document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h3");
    var header_text=document.createTextNode("Accesskeys");
    header.appendChild(header_text);

    //插入列表
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadElement(displayAccesskeys);