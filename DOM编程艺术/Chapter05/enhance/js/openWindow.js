/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-25
 * Time: 上午10:34
 * To change this template use File | Settings | File Templates.
 */
window.onload=prepareLinks;  //在页面加载完成后再执行该函数

//鼠标点击事件函数
function prepareLinks(){
    var link=document.getElementsByTagName("a");
    for(var i=0;i<link.length;i++){
        if(link[i].getAttribute("class")=="popup"){
            link[i].onclick=function(){
                popUp(this.href);
                return false;
            }
        }
    }
}

//弹出窗口
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");  //弹出一个宽320高480的窗口
}