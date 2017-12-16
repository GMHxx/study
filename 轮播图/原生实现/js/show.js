function moveimages(images,nowButton) {
    var newLeft;
    var index;
    newLeft=parseInt(images.style.left)-156;
    if(newLeft<-468){
        newLeft=-156;
    }
    index=-(newLeft/156);
    for(var i=0;i<nowButton.length;i++){
        nowButton[i].setAttribute("class","");
    }
    nowButton[index-1].setAttribute("class","showNow");
    images.style.left=newLeft+"px";
    console.log(newLeft);
}

function play() {
    var button=document.getElementById("button");
    var nowButton=button.getElementsByTagName("span");
    var images=document.getElementById("images");
    var timer;
    timer=setInterval(function () {
        moveimages(images,nowButton);
    },1500);
}
window.onload=play();

