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
    var emailvalue = document.getElementById('email').value;
    var passwordvalue = document.getElementById('password').value;
    console.log("email: ",emailvalue);
    console.log("password: ", passwordvalue);
       $state.go('home');
  }
});
