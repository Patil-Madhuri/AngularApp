/******************************************************************************
 *  Purpose         : Login controller 
 *  @description
 *  @file           : LoginController.js
 *  @overview       : controller for Login.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
app.controller('loginController', function($scope,$state)
{
  $scope.email = "";
  $scope.password="";
  $scope.home = function()
  {
       $state.go('home');
  }
});
