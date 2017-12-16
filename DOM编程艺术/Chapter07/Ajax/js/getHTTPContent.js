/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-28
 * Time: 上午8:15
 * To change this template use File | Settings | File Templates.
 */

//获取指定信息
function getHTTPContent(){
    var request=getHTTPObject();
    //若request存在
    if(request){
        //通过参数GET获取指定文件的内容
        request.open("GET","example.txt",true);
        //在服务器给XMLHttpRequest送回响应时执行
        request.onreadystatechange=function(){
            //readyState属性为4，表示加载交互完成，已可以访问返回的数据
          if(request.readyState==4){
              //alert("Response Received");
              var para=document.createElement("p");
              var txt=document.createTextNode(request.responseText);
              para.appendChild(txt);
              document.getElementById("new").appendChild(para);
          }
        };
        //发送请求
        request.send(null);
    }else{
        alert("抱歉，您的浏览器不支持XMLHttpRequest!");
    }
    //alert("Function Done");
}

//添加onload事件
addLoadElement(getHTTPContent);