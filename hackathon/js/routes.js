app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    controller: 'AppController',
    templateUrl: 'templates/home.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  })
  // $locationProvider.html5Mode(true);

  $routeProvider.when('/form-page',{
    controller: 'FormPageController',
    templateUrl: '/templates/form-page.html'
  });

  $routeProvider.when('/form-two-page',{
    controller: 'FormPageController',
    templateUrl: '/templates/form-two-page.html'
  });

  $routeProvider.when('/welcome-page',{
    controller: 'FormPageController',
    templateUrl: '/templates/welcome-page.html'
  });

  $routeProvider.when('/final-page',{
    controller: 'FormPageController',
    templateUrl: '/templates/final-page.html'
  });

  $routeProvider.when('/rules',{
    controller: 'FormPageController',
    templateUrl: '/templates/rules.html'
  });

});