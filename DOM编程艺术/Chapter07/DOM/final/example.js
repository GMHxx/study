/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-27
 * Time: 上午10:04
 * To change this template use File | Settings | File Templates.
 */
window.onload=function(){
    var testdiv=document.getElementById("testdiv");
    var para=document.createElement("p");
    var txt1=document.createTextNode("This is ");
    var emphasis=document.createElement("em");
    var txt2=document.createTextNode("my");
    var txt3=document.createTextNode(" content.");
    testdiv.appendChild(para);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    emphasis.appendChild(txt2);
    para.appendChild(txt3);
}