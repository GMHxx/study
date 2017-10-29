var get = {
       byId:function(id){
           return document.getElementById(id);
       },

       byClsName:function(clsName,oParent){
           var newClass=[];
           var reg=new RegExp("(^| )"+clsName+"( |$)");
           var allEl = this.byTagName("*",oParent);
           for(var i=0;i<allEl.length;i++)reg.test(allEl[i].className)&&newClass.push(allEl[i]);
           return newClass
       },
       byTagName:function(el,obj){
           return ( obj||document).getElementsByTagName(el);
       }
   }

function getStyle(obj,attr){
   if(obj.currentStyle){
       return obj.currentStyle[attr];
   }else{
       return getComputedStyle(obj,false)[attr];
  }
}