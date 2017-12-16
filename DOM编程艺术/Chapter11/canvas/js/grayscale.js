/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-2
 * Time: 上午8:27
 * To change this template use File | Settings | File Templates.
 */

//鼠标响应函数
function convertToGS(img){
    //若浏览器不支持画布，则退出
    if(!Modernizr.canvas) return false;
    //储存原图片（彩色版）
    img.color=img.src;
    //调用函数创建并保存灰度版
    img.grayscale=createGSCanvas(img);
    //添加鼠标响应事件
    img.onmouseover=function(){
        this.src=this.color;
    }
    img.onmouseout=function(){
        this.src=this.grayscale;
    }
    //调用鼠标移出事件
    img.onmouseout();
}

//创建灰度图片
function createGSCanvas(img){
    //创建画布
    var canvas=document.createElement("canvas");
    canvas.width=img.width;
    canvas.height=img.height;

    //绘制彩色图片
    var ctx=canvas.getContext("2d");
    ctx.drawImage(img,0,0);

    //遍历彩色图片的每一个像素，并将其转化为相应的灰度版
    var c=ctx.getImageData(0,0,img.width,img.height);
    for(var i=0;i<c.height;i++){
        for(var j=0;j<c.width;j++){
            var x=(i*4)*c.height+(j*4);
            var r=c.data[x];
            var g=c.data[x+1];
            var b=c.data[x+2];
            c.data[x]=c.data[x+1]=c.data[x+2]=(r+g+b)/3;
        }
    }

    //将灰度版放回画布，并返回URL
    ctx.putImageData(c,0,0,0,0,c.width,c.height);
    return canvas.toDataURL();
}

window.onload=function(){
    convertToGS(document.getElementById("avatar"));
}