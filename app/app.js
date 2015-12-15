'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngTouch',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller("AppController",function($scope){
	$scope.menuState = "";
  $scope.active = "/view1";
	$scope.menuButton = function(){
		$scope.menuState = $scope.menuState === "" ? "menu-open" : "";
	};
  $scope.toggleMenu = function(cmd){
    $scope.menuState = cmd === 'open' ? "menu-open" : "";
  };
})
.run(function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      console.log($location.$$path);
      $rootScope.$$childHead.active = $location.$$path;
    	$rootScope.$$childHead.menuState = "";
   });
});