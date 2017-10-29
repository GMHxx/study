/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-7
 * Time: 下午8:10
 * To change this template use File | Settings | File Templates.
 */
$(function() {
    $(".menu >ul >li").hover(function() {
        $(this).children(".sub_menu").show();

    }, function() {

    $(this).children(".sub_menu").hide();
    });

});
$(function() {

   //将除了第一div隐藏
    $('.sub_caption:not(:first)').hide();

    $('.title-item').hover(function(e){
        $('.title-item').removeClass('select');//清除所有的select样式
        $(this).addClass('select');//当前加上select样式
        //console.log($(this).index());
        $('.sub_caption').hide();
        $('.sub_caption').eq($(this).index()).show();//显示对应div
    },function(){

    });
});