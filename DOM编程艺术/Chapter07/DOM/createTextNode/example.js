/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-27
 * Time: 上午9:33
 * To change this template use File | Settings | File Templates.
 */

//插入子节点
window.onload=function(){
    var para=document.createElement("p");     //创建一个元素节点
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);   //将para作为子节点插入testdiv
    var txt=document.createTextNode("Hello World");   //创建一个文本节点
    para.appendChild(txt);
    //alert(testdiv.lastChild.nodeType);
    /*var info="nodeName：";
    info+=para.nodeName;     //获得该节点nodeName属性
    info+=" nodeType：";
    info+=para.nodeType;     //获得该节点nodeType属性
    alert(info);*/
}