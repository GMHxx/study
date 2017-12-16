/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-4
 * Time: 上午10:03
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

//页面突出显示
function highlightPage(){
    if(!document.getElementsByTagName||!document.getElementById) return false;
    var headers=document.getElementsByTagName("header");
    if(headers.length==0) return false;
    var navs=headers[0].getElementsByTagName("nav");
    if(navs.length==0) return false;
    var links=navs[0].getElementsByTagName("a");
    var linkurl;
    for(var i=0;i<links.length;i++){
        linkurl=links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl)!=-1){
            //为该链接新建类名here
            links[i].className="here";
            //为该页面body添加id
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
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

//幻灯片显示缩略图
function prepareSlideshow(){
    if(!document.getElementsByTagName||!document.getElementById) return false;
    if(!document.getElementById("intro")) return false;
    var intro=document.getElementById("intro");
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var frame=document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);
    var preview=document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
    var links=document.getElementsByTagName("a");
    var destination;
    for(var i=0;i<links.length;i++){
        links[i].onmouseover=function(){
            destination=this.getAttribute("href");
            if(destination.indexOf("index.html")!=-1){
                moveElement("preview",0,0,5);
            }
            if(destination.indexOf("about.html")!=-1){
                moveElement("preview",-150,0,5);
            }
            if(destination.indexOf("photos.html")!=-1){
                moveElement("preview",-300,0,5);
            }
            if(destination.indexOf("live.html")!=-1){
                moveElement("preview",-450,0,5);
            }
            if(destination.indexOf("contact.html")!=-1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}

//显示相应的章节
function showSection(id){
    var sections=document.getElementsByTagName("section");
    for(var i=0;i<sections.length;i++){
        if(sections[i].getAttribute("id")!=id){
            sections[i].style.display="none";
        }else{
            sections[i].style.display="block";
        }
    }
}

//调用showSection函数
function prepareInternalnav(){
    if(!document.getElementsByTagName||!document.getElementById) return false;
    var articles=document.getElementsByTagName("article");
    if(articles.length==0) return false;
    var navs=articles[0].getElementsByTagName("nav");
    if(navs.length==0) return false;
    var nav=navs[0];
    var links=nav.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        //取分隔符#后的一个元素
        var sectionId=links[i].getAttribute("href").split("#")[1];
        if(!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display="none";
        //创建一个属性，可以在此函数之外调用
        links[i].destination=sectionId;
        links[i].onclick=function(){
            showSection(this.destination);
            return false;
        }
    }
}

//切换图片和文字
function showPic(whichpic){
    //检查是否存在该标签
    if(!document.getElementById("placeholder")){
        return false;
    }

    var source=whichpic.getAttribute("href");   //获得图片链接
    var placeholder=document.getElementById("placeholder");
    //检查该元素是否为图片
    if(placeholder.nodeName!="IMG"){
        return false;
    }
    placeholder.setAttribute("src",source);   //利用DOM来替换图片

    //非主要功能，只在该标签存在时执行
    if(document.getElementById("description")){
        //检查title属性是否为null，为null就给其赋空值
        var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
        var description=document.getElementById("description");
        //检查该元素是否为文本元素
        if(description.firstChild.nodeType==3){
            description.firstChild.nodeValue=text;  //将p标签的文本替换为a标签的title值
        }

    }
    return false;
}

//创建并插入img和p元素
function preparePlaceholder(){
    if(!document.getElementById||!document.createElement||!document.createTextNode) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var txt=document.createTextNode("choose an image");
    description.appendChild(txt);

    //在该元素之后插入新元素
    var gallery=document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

//事件处理函数
function prepareGallery(){
    //检查浏览器是否理解DOM
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false
    }

    var gallery=document.getElementById("imagegallery");
    var link=gallery.getElementsByTagName("a");
    for(var i=0;i<link.length;i++){
        link[i].onclick=function(){         //添加鼠标点击事件
            return showPic(this);
        }
    }
}

//改变奇偶行样式
function stripeTable(){
    if(!document.getElementsByTagName) return false;
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            //偶数行改变样式
            if(odd==true){
                addClass(rows[j],"odd");
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

//鼠标悬浮动画
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        //保存旧类名
        rows[i].oldClassName=rows[i].className;
        rows[i].onmouseover=function(){
            addClass(this,"highlight");
        }
        rows[i].onmouseout=function(){
            this.className=this.oldClassName;
        }
    }
}

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
    var articles=document.getElementsByTagName("article");
    if(articles.length==0) return false;
    var container=articles[0];
    container.appendChild(header);
    container.appendChild(dlist);
}

//单击标签获取焦点
function focusLabels(){
    if(!document.getElementsByTagName) return false;
    var labels=document.getElementsByTagName("label");
    for(var i=0;i<labels.length;i++){
        labels[i].onclick=function(){
            var id=this.getAttribute("for");
            if(!document.getElementById(id)) return false;
            var element=document.getElementById(id);
            //获取焦点
            element.focus();
        }
    }
}

//在浏览器不支持placeholder时，添加占位符
function resetFields(whichform){
    if(Modernizr.input.placeholder) return;
    //遍历表单元素
    for(var i=0;i<whichform.elements.length;i++){
        var element=whichform.elements[i];
        if(element.type=="submit") continue;
        var check=element.placeholder||element.getAttribute("placeholder");
        if(!check) continue;
        element.onfocus=function(){
            var text=this.placeholder||this.getAttribute("placeholder");
            if(this.value==text){
                this.className="";
                this.value="";
            }
        }
        element.onblur=function(){
            if(this.value==""){
                this.className="placeholder";
                this.value=this.placeholder||this.getAttribute("placeholder");
            }
        }
        element.onblur();
    }
}

//将form对象传给相应函数
function prepareForms(){
    for(var i=0;i<document.forms.length;i++){
        var thisform=document.forms[i];
        resetFields(thisform);
        thisform.onsubmit=function(){
            if(!validateForm(this)) return false;
            var article=document.getElementsByTagName("article")[0];
            if(submitFormWithAjax(this,article)) return false;
            return true;
        }
    }
}

//验证是否输入了内容
function isFilled(field){
    if(field.value.replace(' ','').length==0) return false;
    var placeholder=field.placeholder||field.getAttribute("placeholder");
    return (field.value!=placeholder);
}

//验证是否为邮箱
function isEmail(field){
    return (field.value.indexOf("@")!=-1&&field.value.indexOf(".")!=-1);
}

//对表单输入进行验证
function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var element=whichform.elements[i];
        if(element.required=="required"){
            if(!isFilled(element)){
                alert("Please fill in the "+element.name+" field.");
                return false;
            }
        }
        if(element.type=="email"){
            if(!isEmail(element)){
                alert("The "+element.name+" field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

//调用XMLHttpRequest对象
function getHTTPObject(){
    //ie不支持XMLHttpRequest(需要检测ie版本并重写函数)
    if(typeof(XMLHttpRequest)=="undefined"){
        XMLHttpRequest=function(){
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP");}
            catch(e){}
            return false;
        }
    }
    //返回一个XMLHTTP对象
    return new XMLHttpRequest();
}

//加载动画
function displayAjaxLoading(element){
    while(element.hasChildNodes()){
        element.removeChild(element.lastChild);
    }
    var content=document.createElement("img");
    content.setAttribute("src","images/loading.gif");
    content.setAttribute("alt","Loading");
    element.appendChild(content);
}

//发送Ajax请求，拦截表单提交任务
function submitFormWithAjax(whichform,thetarget){
    var request=getHTTPObject();
    if(!request) return false;
    displayAjaxLoading(thetarget);
    var dataParts=[];
    var element;
    for(var i=0;i<whichform.elements.length;i++){
        element=whichform.elements[i];
        dataParts[i]=element.name+"="+encodeURIComponent(element.value);
    }
    var data=dataParts.join("&");
    request.open('POST',whichform.getAttribute("action"),true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    request.onreadystatechange=function(){
        if(request.readyState==4){
            if(request.status==200||request.status==0){
                var matches=request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    thetarget.innerHTML=matches[1];
                }else{
                    thetarget.innerHTML='<p>Oop, there was an error. Sorry.</p>';
                }
            }else{
                thetarget.innerHTML='<p>' +request.statusText+ '</p>';
            }
        }
    };
    request.send(data);
    return true;
};

addLoadElement(highlightPage);
addLoadElement(prepareSlideshow);
addLoadElement(prepareInternalnav);
addLoadElement(preparePlaceholder);
addLoadElement(prepareGallery);
addLoadElement(stripeTable);
addLoadElement(highlightRows);
addLoadElement(displayAbbreviations);
addLoadElement(focusLabels);
addLoadElement(prepareForms);