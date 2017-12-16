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

//给函数添加onload事件
addLoadElement(prepareGallery);

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
            showPic(this);
            return false;
        }
    }
}

//切换图片和文字
function showPic(whichpic){
    var source=whichpic.getAttribute("href");   //获得图片链接
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);   //利用DOM来替换图片
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    description.firstChild.nodeValue=text;  //将p标签的文本替换为a标签的title值
}

