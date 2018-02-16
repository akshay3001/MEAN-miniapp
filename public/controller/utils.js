angular.module('app')
  .controller('util', function ($scope, $location) {
    $scope.signUp = function () {
      $location.path('/signUp');
    }
  });
