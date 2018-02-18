angular.module('app')
  .controller('signUp', function($scope, serviceCalls) {
//    console.log('entered into signup controller');

    $scope.User = {
      name: $scope.name,
      password: $scope.password,
      email: $scope.email,
      phone: $scope.phone
    }

    $scope.signUp = function () {
      serviceCalls.credentials($scope.User).then(function (res) {
        $scope.data = res.data;
        console.log('data:', $scope.data);
      });

    }

  });
