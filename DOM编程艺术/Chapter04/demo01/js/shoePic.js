/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-25
 * Time: 上午8:14
 * To change this template use File | Settings | File Templates.
 */
function showPic(whichpic){
        var source=whichpic.getAttribute("href");   //获得图片链接
        var placeholder=document.getElementById("placeholder");
        placeholder.setAttribute("src",source);   //利用DOM来替换图片
        //placeholder.src=source;    //非DOM方法
}