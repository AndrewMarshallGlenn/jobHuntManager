var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'home',
    })
  .when('/board', {
      templateUrl: '/views/templates/board.html',
      controller: 'board',
    })
  .otherwise({
      redirectTo: 'home',
    });
}]);

myApp.controller('UserController', ['$scope', '$http', '$window', 'DataFactory',
function ($scope, $http, $window, DataFactory) {
  var dataFactory = DataFactory;
  dataFactory.getUser().then(function () {$scope.playerName = dataFactory.userName();});
}]);
