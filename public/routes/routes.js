angular.module('app')
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [{
        path: '/',
        component: 'home'
      },
      {
        path: '/signUp',
        component: 'signUp'
      }
    ]
  });
