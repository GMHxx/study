/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-31
 * Time: 上午9:39
 * To change this template use File | Settings | File Templates.
 */

//鼠标悬浮加粗(thead无法被渲染)
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight="bold";
        }
        rows[i].onmouseout=function(){
            this.style.fontWeight="normal"
        }
    }
}

addLoadElement(highlightRows);
