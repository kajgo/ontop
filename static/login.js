var module = angular
    .module('loginApp', []);

function LoginController($scope, $location) {
  $scope.master = {};
  $scope.loginForm = true;

  $scope.login = function(user) {
    if(user.name === user.password) {
      $scope.loginForm = false;
      $scope.indexView = true;
    } else {
      $scope.reset();
    }
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}
