angular.module('app')
  .controller('util', function ($scope, $location) {
    $scope.list = function () {
      $location.path('/list');
    }
  });
