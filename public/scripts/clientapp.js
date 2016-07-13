var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'homeController',
    })
  .when('/board', {
      templateUrl: '/views/templates/board.html',
      controller: 'boardController',
    })
  .otherwise({
      redirectTo: 'home',
    });
}]);
