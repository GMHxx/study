/**
 * Created by JetBrains WebStorm.
 * User: dell
 * Date: 17-7-31
 * Time: 上午9:19
 * To change this template use File | Settings | File Templates.
 */

//改变奇偶行样式
function stripeTable(){
    if(!document.getElementsByTagName) return false;
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            //偶数行改变样式
            if(odd==true){
                addClass(rows[j],"odd");
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

addLoadElement(stripeTable);