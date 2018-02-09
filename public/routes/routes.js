angular.module('app')
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
      {
      path: '/',
      component: 'home'
    },
    {
      path: '/list',
      component: 'list'
    }]
  });
