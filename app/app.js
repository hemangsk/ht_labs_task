angular.module('ht', ['ngRoute', 'ngStorage', 'ngResource','ngAnimate'])
.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
   $routeProvider.
   when('/', {
    templateUrl: './app/views/index.html',
    controller: 'IndexCtrl',
    controllerAs: 'index'
  })
   $locationProvider.html5Mode(false).hashPrefix('');
   
 }])