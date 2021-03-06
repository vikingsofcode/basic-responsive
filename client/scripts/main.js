require('angular');
require('angular-route');
require('angular-resource');
require('angular-animate');
var views = 'views/';

angular.module('vikingApp', ['ngRoute', 'ngResource', 'ngAnimate', 'basic']);

var app = angular.module('basic', []);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: views + 'front.html',
      controller:  'frontController'
    });
  
  // $locationProvider.html5Mode(true);
}]);

app.controller('frontController', ['$scope', '$resource', '$http', '$routeParams', '$route', '$q', '$location', function($scope, $resource, $http, $routeParams, $route, $q, $location) {

}]);
