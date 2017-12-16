/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-26
 * Time: 上午9:32
 * To change this template use File | Settings | File Templates.
 */

//添加windows.onload事件
function addLoadElement(func){
    var oldonload=window.onload;
    if(typeof(window.onload)!="function"){     //如果这个处理函数没有绑定其他函数
        window.onload=func;                      //将新函数添加给它
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

//在元素之后插入一个新元素
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        //若目标元素为父元素最后一个子元素，则在父节点最后直接插入新元素
        parent.appendChild(newElement);
    }else{
        //若目标元素不是最后一个子元素，则再其下一个元素之前插入新元素
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//列表注释函数
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

//文献来源链接
function displayCitations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    var quotes=document.getElementsByTagName("blockquote");
    //遍历数组
    for(var i=0;i<quotes.length;i++){
        //若该元素不含cite属性，跳出此次循环
        if(!quotes[i].getAttribute("cite")) continue;
        var url=quotes[i].getAttribute("cite");
        //找出该元素子节点中的最后一个元素节点
        var quoteChild=quotes[i].getElementsByTagName("*");
        if(quoteChild.length<1) continue;
        var elem=quoteChild[quoteChild.length-1];

        //建立链接
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);

        //建立并插入上标
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

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

//获取下一个元素节点
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    //循环调用直到找出下一个元素节点或搜索完所有节点
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

//修改笑一个元素节点的样式
function styleHeaderSibling(tag,theclass){
    if(!document.getElementsByTagName) return false;
    var elems=document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<elems.length;i++){
        //获取其下一个元素节点
        elem=getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}

//改变奇偶行样式
function stripeTable(tag,childtag,theclass){
    if(!document.getElementsByTagName) return false;
    var tables=document.getElementsByTagName(tag);
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName(childtag);
        for(var j=0;j<rows.length;j++){
            //偶数行改变样式
            if(odd==true){
                addClass(rows[j],theclass);
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

//添加class属性
function addClass(element,value){
    //若该元素没有类名，则直接将新类名赋给它
    if(!element.className){
        element.className=value;
    }else{
        //若该元素已有类名，则通过拼接追加类名（必须在新类名前加空格）
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}

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

//添加onload事件
addLoadElement(displayAbbreviations);
addLoadElement(displayCitations);
addLoadElement(displayAccesskeys);
addLoadElement(styleHeaderSibling);
addLoadElement(stripeTable);