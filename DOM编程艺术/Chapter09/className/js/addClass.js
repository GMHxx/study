/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-31
 * Time: 上午10:05
 * To change this template use File | Settings | File Templates.
 */

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