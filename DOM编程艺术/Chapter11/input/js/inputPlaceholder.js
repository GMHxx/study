/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-8-2
 * Time: 上午10:18
 * To change this template use File | Settings | File Templates.
 */

//不支持H5时的替代方法
function inputPlaceholder(){
    if(!Modernizr.input.placeholder){
        var input=document.getElementById("first-name");
        //表单获取焦点时
        input.onfocus=function(){
            var text=this.placeholder||this.getAttribute("placeholder");
            if(this.value==text){
                //重置输入框的内容，隐藏初始值
                this.value="";
            }
        }
        input.onblur=function(){
            if(this.value==""){
                this.value=this.placeholder||this.getAttribute("placeholder");
            }
        }
    }
    input.onblur();
}

window.onload=function(){
    inputPlaceholder();
}