app.controller("cartCtrl", function($scope,$rootScope) {
  $scope.itemsInCart = $rootScope.arrayOfCart;
  console.log("Cart controller: ", $scope.itemsInCart)
});
