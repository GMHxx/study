/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-6
 * Time: 下午4:15
 * To change this template use File | Settings | File Templates.
 */
/*搜索栏*/
$(function(){
    (function($){
        var oLi=$('#ss ul li');
        var oTxt=$('#ss .form .s_inp');
        var iNow=0;
        var arrTxt=[
            '例：11',
            '例：22'
        ];
        oTxt.val(arrTxt[iNow]);
        oLi.each(function(index){

            $(this).click(function(){
                oLi.removeClass();
                $(this).addClass('active').siblings().addClass('gradient');
                oTxt.val(arrTxt[index]);
            })
        })
    })(jQuery);
})
/*二级菜单*/
$(function() {

   //只显示第一个div
    $('.sub_menu:not(:first)').hide();

    $('.title-item').hover(function(num){
        $('.title-item').removeClass('select');//清除所有的select样式
        $(this).addClass('select');//当前加上select样式
        $('.sub_menu').hide();
        var getleft=num*70;
        $('.sub_menu ul').eq($(this).index()).animate({marginLeft:getleft+"px"});
        $('.sub_menu').eq($(this).index()).show();//显示对应div
    },function(){

    });
});
/*倒计时*/
$(function(){
    var endtime = new Date("2017/11/20 00:00:00");
      setInterval(function () {
        var nowtime = new Date();
        var time = endtime - nowtime;
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
          if(hour<10)
            $('.time_h').html("0"+hour);
          else if(hour>=10)
            $('.time_h').html(hour);
          if(minute<10)
            $('.time_m').html("0"+minute);
          else if(minute>=10)
            $('.time_m').html(minute);
          if(seconds<10)
            $('.time_s').html("0"+seconds);
          else if(seconds>=10)
            $('.time_s').html(seconds);
      }, 1000);
});
/*轮播图*/
$(function(){
oUl = $('.list');
oULis = $('.list li');
oNum = $('.count li');
oneLiWidth = oULis.eq(0).width();
var _now = 0;
var _imgNow = 0;
var timid = null;
function slider(){
    if(_now==oULis.size()-1){
        last=oULis.eq(0).clone();
        last.appendTo(oUl)
        _now=0;
    }else{
        _now++;
    }
    _imgNow++;
    oUl.animate({'left':-oneLiWidth*_imgNow},300,function(){
        if(_now==0){
           last.remove();
           oUl.css('left','0');
           _imgNow=0;
        }
    })
    oNum.eq(_now).addClass('act').siblings().removeClass('act')
}
oNum.click(function(){
     clearInterval(timid)
     index=$(this).index();
     _now=index;
     _imgNow = _now;
     oUl.animate({'left':-oneLiWidth*_imgNow},300);
     oNum.eq(_now).addClass('act').siblings().removeClass('act')
})
timid = setInterval(slider,2000);
oUl.mouseover(function(){
    clearInterval(timid)
}).mouseout(function(){
   timid = setInterval(slider,2000);
    })
});
/*$(function(){
var curIndex = 0,
      imgLen = $(".list li").length; //图片总数

  var autoChange = setInterval(function(){
    if(curIndex < imgLen-1){
      curIndex ++;
    }else{
      curIndex = 0;
    }

    changeTo(curIndex);
  },2500);
  $(".count").find("li").each(function(item){
    $(this).hover(function(){
      clearInterval(autoChange);
      changeTo(item);
      curIndex = item;
    },function(){
      autoChangeAgain();
    });
  });
  function autoChangeAgain(){
      autoChange = setInterval(function(){
      if(curIndex < imgLen-1){
        curIndex ++;
      }else{
        curIndex = 0;
      }

      changeTo(curIndex);
    },2500);
    }
  function changeTo(num){
    var goLeft = num * 539;
    $(".list").animate({left: "-" + goLeft + "px"},500);
    $(".count").find("li").removeClass("act").eq(num).addClass("act");
  }
});*/

/*图片遮罩*/
$(function(){
    
    $('.today_goods').hover(function(){
        $(this).children('.overplay').hide();
        $('.today_goods').not(this).children('.overplay').show(500);
    },function(){
        $('.today_goods').children('.overplay').hide();
    });
});
