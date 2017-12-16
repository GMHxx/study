/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-25
 * Time: 上午8:14
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
            return !showPic(this);         //执行该函数，并返回其返回值的相反值
            //return showPic(this) ? false:true;  //代码执行结果同上
        }
        //link[i].onkeypress=link[i].onclick;   //键盘访问（易出错，不建议使用）
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
    return true;
}

//创建并插入img和p元素
function preparePlaceholder(){
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/service_05.png");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var txt=document.createTextNode("choose an image");
    description.appendChild(txt);

    //在该元素之前插入一个相对它的兄弟元素
    var gallery=document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);
    /*  //在body最后插入一个子元素
    document.body.appendChild(placeholder);
    document.body.appendChild(description);*/
}

//给函数添加onload事件
addLoadElement(prepareGallery);
addLoadElement(preparePlaceholder);