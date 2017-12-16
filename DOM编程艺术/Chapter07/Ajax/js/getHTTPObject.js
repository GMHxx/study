/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-28
 * Time: 上午8:15
 * To change this template use File | Settings | File Templates.
 */

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