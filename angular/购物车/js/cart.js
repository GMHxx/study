
var cartController=function($scope){
    $scope.cart=[
        {
            id:10,
            name:"iphone8",
            quantity:10,
            price:6000
        },
        {
            id:20,
            name:"iphoneX",
            quantity:8,
            price:9000
        },
        {
            id:330,
            name:"ipad",
            quantity:15,
            price:7000
        },
        {
            id:130,
            name:"iphone6",
            quantity:13,
            price:3000
        }
    ];

    //索引
    var findIndex=function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
                return;
            }
        });
        return index;
    }

    //移除
    $scope.remove=function(id){
        var index=findIndex(id);
        if(index!=-1){
            $scope.cart.splice(index,1);
        }
    }

    //计算总价
    $scope.totalPrice=function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total+=item.quantity*item.price;
        });
        return total;
    }

    //计算总数
    $scope.totalQuantity=function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total+=parseInt(item.quantity);
        });
        return total;
    }

    //增加数量
    $scope.add=function(id){
        var index=findIndex(id);
        if(index!=-1){
            ++$scope.cart[index].quantity;
        }
    }

    //减少数量
    $scope.reduce=function(){
        var index=findIndex(id);
        if(index!=-1){
            var quantity=$scope.cart[index].quantity;
            if(quantity>1){
                --quantity;
            }else{
                var returnKey=confirm("是否从购物车删除该商品？");
                if(returnKey){
                    $scope.remove(id);
                }
            }
        }
    }

    //监听数量，数量小于1时，判断是否删除该商品
    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function(item,key){
            if(item.quantity<1){
                var returnKey=confirm("是否从购物车删除该商品？");
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity=oldValue[key].quantity;
                }
            }
        });
    },true);

}