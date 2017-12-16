/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-27
 * Time: 上午8:55
 * To change this template use File | Settings | File Templates.
 */

//在页面显示text文本
function insertParagraph(text){
    var str="<p>";
    str+=text;       //字符串拼接
    str+="</p>";
    document.write(str);
}