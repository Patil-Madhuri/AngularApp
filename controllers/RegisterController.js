/******************************************************************************
 *  Purpose         : Register controller 
 *  @description
 *  @file           : RegisterController.js
 *  @overview       : controller for Register.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.controller('registerController', function($scope, $state)
{
  $scope.firstName ="";
  $scope.lastName ="";
  $scope.email = "";
  $scope.password="";
  $scope.contact="";
  $scope.login = function() {
       // console.log("hello");
       $state.go('login');
     }
});
