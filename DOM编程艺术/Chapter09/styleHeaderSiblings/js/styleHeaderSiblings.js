/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-31
 * Time: 上午8:35
 * To change this template use File | Settings | File Templates.
 */

//获取下一个元素节点
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    //循环调用直到找出下一个元素节点或搜索完所有节点
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}

//修改笑一个元素节点的样式
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers=document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<headers.length;i++){
        //获取其下一个元素节点
        elem=getNextElement(headers[i].nextSibling);
        elem.style.fontWeight="bold";
        elem.style.fontSize="1.2em";
    }
}

addLoadElement(styleHeaderSiblings);