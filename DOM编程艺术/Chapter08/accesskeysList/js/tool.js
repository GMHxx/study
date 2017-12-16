/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-26
 * Time: 上午9:32
 * To change this template use File | Settings | File Templates.
 */

//添加windows.onload事件
function addLoadElement(func){
    var oldonload=window.onload;
    if(typeof(window.onload)!="function"){     //如果这个处理函数没有绑定其他函数
        window.onload=func;                      //将新函数添加给它
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

//在元素之后插入一个新元素
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        //若目标元素为父元素最后一个子元素，则在父节点最后直接插入新元素
        parent.appendChild(newElement);
    }else{
        //若目标元素不是最后一个子元素，则再其下一个元素之前插入新元素
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
