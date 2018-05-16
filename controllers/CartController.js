app.controller("cartCtrl", function($scope, $rootScope) {
  $rootScope.itemsInCart = $rootScope.arrayOfCart;
  console.log("Cart controller: ", $rootScope.itemsInCart.length);

  $scope.listForQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  $scope.selectedMobile = $scope.listForQuantity[0];
  console.log("selectedMobile: ", $scope.selectedMobile);

  $scope.selectChanged = function(product, quantity) {
    product.sum = product.price * quantity;
    console.log("sum: ", product.sum);
    $scope.total1 = 0;
    $rootScope.itemsInCart.forEach(function(product) {
      $scope.total1 = $scope.total1 + product.sum
    });

  }
  $scope.removeItemFromCart = function(product) {
    var index = $scope.itemsInCart.indexOf(product);
    if (index > -1) {
      $scope.itemsInCart.splice(index, 1);
      $scope.total1 = $scope.total1 - product.sum;

    }
  }
});
