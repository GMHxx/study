/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-28
 * Time: 上午10:17
 * To change this template use File | Settings | File Templates.
 */

//以列表形式注释缩略词
function displayAbbreviations(){
    //若不支持DOM则退出
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    var abbreviation=document.getElementsByTagName("abbr");
    //若文本中无abbr就退出
    if(abbreviation.length<1) return false;
    var defs=new Array();   //创建一个新数组
    //遍历缩略词数组
    for(var i=0;i<abbreviation.length;i++){
        //获取当前数组
        var current_abbr=abbreviation[i];
        //若当前abbr标签子节点长度为0，跳出此次循环（ie6不承认abbr标签）
        if(current_abbr.childNodes.length<1) continue;
        var definition=current_abbr.getAttribute("title");
        //获取其内容
        var key=current_abbr.lastChild.nodeValue;
        //将当前标签title值赋给数组，并使用当前key值作为数组下标
        defs[key]=definition;
    }
    //创建一个空列表
    var dlist=document.createElement("dl");
    //使用for/in循环建立列表
    for(key in defs){
        //获取当前数组内容
        var definition=defs[key];
        var dtitle=document.createElement("dt");
        //获取当前缩略词key
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //当列表子节点数为0时退出(ie6不支持abbr标签)
    if(dlist.childNodes.length<1) return false;
    //创建列表名
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //插入列表
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

//添加onload事件
addLoadElement(displayAbbreviations);