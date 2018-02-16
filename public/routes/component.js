angular.module('app')
  .component('home', {
    templateUrl: './views/home.html',
    // template : '<h1>Hello</h1>',
    controller: 'util'
  })
  .component('signUp', {
    templateUrl: './views/signUp.html',
    controller: 'signUp'
  });
