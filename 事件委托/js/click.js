
/*function listClick() {
    var oUl = document.getElementById("list");
    oUl.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            alert(target.innerHTML);
        }
    }
}*/


function listClick() {
    var list=document.getElementById("list");
    list.addEventListener('click',function (e) {
        var event=e||window.event;
        var target=event.target||event.srcElement;
        if(target.nodeName.toLocaleLowerCase()==="li"){
            console.log(target.innerHTML);
        }
    });
}

function buttonClick() {
    var but=document.getElementById("box");
    but.addEventListener('click',function (e) {
        var event=e||window.event;
        var target=event.target||event.srcElement;
        if(target.nodeName.toLocaleLowerCase()==="input"){
            switch (target.id){
                case 'add':
                    alert("添加");
                    break;
                case 'remove':
                    alert("删除");
                    break;
                case 'move':
                    alert("移动");
                    break;
                case 'select':
                    alert("选择");
                    break;
            }
        }
    })
}
window.onload=listClick();
window.onload=buttonClick();

