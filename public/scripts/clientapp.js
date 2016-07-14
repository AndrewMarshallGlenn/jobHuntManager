var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/home', {
      templateUrl: '/views/templates/home_temp.html',
      controller: 'homeController',
    })
  .when('/board', {
      templateUrl: '/views/templates/board_temp.html',
      controller: 'boardController',
    })
  .when('/applications', {
        templateUrl: '/views/templates/applications_temp.html',
        controller: 'applicationsController',
      })
  .otherwise({
      redirectTo: 'home',
    });
}]);
