app.controller("cartCtrl", function($scope,$rootScope) {
$rootScope.itemsInCart = $rootScope.arrayOfCart;
  console.log("Cart controller: ", $rootScope.itemsInCart)
  $scope.listForQuantity= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  $scope.selectedItem = $scope.listForQuantity[0];
  console.log("selectedItem: ",$scope.selectedItem);

   $scope.selectChanged = function(product, quantity) {
   product.sum = product.price * quantity;
   console.log("sum: ",product.sum);
   $scope.total1 = 0;
   $scope.itemsInCart.forEach(function(product) {
   $scope.total1 = $scope.total1 + product.sum
   });
 }
 $scope.removeItemCart = function(product) {
   var index = $scope.itemsInCart.indexOf(product);
   if (index > -1) {
     $scope.itemsInCart.splice(index, 1);
     $scope.total1 = $scope.total1 - product.sum;
   }
 }
});
