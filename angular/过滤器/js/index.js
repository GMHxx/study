angular.module('product',[])

.service('productData',function(){
        return [
            {
                id:111,
                name:"iphone8",
                price:6000
            },
            {
                id:222,
                name:"iphoneX",
                price:9000
            },
            {
                id:313,
                name:"ipad",
                price:5500
            },
            {
                id:321,
                name:"imac",
                price:12000
            }
        ]
    })
.controller('productController',function($scope,productData){
        $scope.productData=productData;
        $scope.orderType="id";
        $scope.order="-";

        $scope.changeOrder=function(type){
            $scope.orderType=type;

            if($scope.order===""){
                $scope.order="-";
            }else{
                $scope.order="";
            }
        }
    })
