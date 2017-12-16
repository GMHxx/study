/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-1
 * Time: 上午10:21
 * To change this template use File | Settings | File Templates.
 */

//图片窗口显示
function prepareSlideshow(){
    if(!document.getElementsByTagName||!document.getElementById||!document.createElement) return false;
    if(!document.getElementById("linklist")) return false;
    //创建并插入图片
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview=document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    //将div插到链接之后
    var list=document.getElementById("linklist");
    insertAfter(slideshow,list);
    var link=document.getElementsByTagName("a");

    link[0].onmousemove=function(){
        moveElement("preview",-200,0,10);
    }
    link[1].onmousemove=function(){
        moveElement("preview",-400,0,10);
    }
    link[2].onmousemove=function(){
        moveElement("preview",-600,0,10);
    }
}

addLoadElement(prepareSlideshow);