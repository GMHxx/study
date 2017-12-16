/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-30
 * Time: 上午8:45
 * To change this template use File | Settings | File Templates.
 */

//文献来源链接
function displayCitations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    var quotes=document.getElementsByTagName("blockquote");
    //遍历数组
    for(var i=0;i<quotes.length;i++){
        //若该元素不含cite属性，跳出此次循环
        if(!quotes[i].getAttribute("cite")) continue;
        var url=quotes[i].getAttribute("cite");
        //找出该元素子节点中的最后一个元素节点
        var quoteChild=quotes[i].getElementsByTagName("*");
        if(quoteChild.length<1) continue;
        var elem=quoteChild[quoteChild.length-1];

        //建立链接
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);

        //建立并插入上标
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadElement(displayCitations);