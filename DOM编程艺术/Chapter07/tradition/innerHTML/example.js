/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-27
 * Time: 上午9:14
 * To change this template use File | Settings | File Templates.
 */

//innerHTML方法替换内容
window.onload=function(){
    var testdiv=document.getElementById("testdiv");
    testdiv.innerHTML="<p>I inserted <em>this</em> content.</p>"  //该方法会将元素内所有内容替换掉
}