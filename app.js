/********************************************************************************
 *  Purpose         : App descriptor for state handling.
 *  @description
 *  @file           : app.js
 *  @overview       : delcaration of various states and dependencies is done here.
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ********************************************************************************/
var app = angular.module('myApp', ['ui.router', 'ngMaterial', 'angular.filter','ngAnimate','jkAngularRatingStars']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'templates/Register.html',
      controller: 'registerController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/Login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/Home.html',
      controller: 'homeCtrl'
    })
    .state("home.dashboard", {
      url: "/dashboard",
      templateUrl: "templates/Dashboard.html",
      controller: "dashboardCtrl"
    })
    .state("home.cart", {
      url: "/cart",
      templateUrl: "templates/Cart.html",
      controller: "cartCtrl"
    });
    $urlRouterProvider.otherwise('/login');
}]);
