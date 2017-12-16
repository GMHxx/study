/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-25
 * Time: 上午8:14
 * To change this template use File | Settings | File Templates.
 */

//切换图片和文字
function showPic(whichpic){
    var source=whichpic.getAttribute("href");   //获得图片链接
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);   //利用DOM来替换图片
    //placeholder.src=source;    //非DOM方法
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    //alert(description.nodeValue)   //p标签的nodeValue值为null
    //alert(description.firstChild.nodeValue)  //p标签的第一个子元素的nodeValue值为其文本
    description.firstChild.nodeValue=text;  //将p标签的文本替换为a标签的title值
}

/*
//获取所有子元素
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];  //获取body标签
    //alert(body_element.childNodes.length);   //显示body所有子元素的长度
    alert(body_element.nodeType);   //显示body的节点类型
}
window.onload=countBodyChildren;  //页面加载时执行countBodyChildren函数
*/

