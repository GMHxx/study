/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-1
 * Time: 上午8:20
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