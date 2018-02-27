angular.module('app')
  .factory('serviceCalls', ['$http', function ($http) {
    var signUpData = {};

    signUpData.credentials = function (reqObj) {
      alert('Entered into service');
      console.log('user created');
      return $http({
        method: 'POST',
        url: 'http://localhost:3002/users',
        data: reqObj
      });

    }
    return signUpData;
  }]);
