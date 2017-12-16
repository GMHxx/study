/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-27
 * Time: 上午9:33
 * To change this template use File | Settings | File Templates.
 */

//创建并验证p元素
window.onload=function(){
    var para=document.createElement("p");
    var info="nodeName：";
    info+=para.nodeName;     //获得该节点nodeName属性
    info+=" nodeType：";
    info+=para.nodeType;     //获得该节点nodeType属性
    alert(info);
}