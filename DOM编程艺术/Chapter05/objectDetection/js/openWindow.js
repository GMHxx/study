/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-26
 * Time: 上午7:54
 * To change this template use File | Settings | File Templates.
 */

//鼠标点击事件函数
window.onload=function(){    //页面加载完成再执行
    if(!document.getElementById) return false;     //对象检测脚本（检测是否支持这个方法）
    var link=document.getElementsByTagName("a");
    for(var i=0;i<link.length;i++){
        if(link[i].getAttribute("class")=="popup"){
            link[i].onclick=function(){     //添加鼠标点击事件
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