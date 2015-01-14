app.directive('welcomePage', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/welcome-page.html'
  };
});

app.directive('formPage', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/form-page.html'
  };
});

app.directive('formTwoPage', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/form-two-page.html'
  };
});

app.directive('finalPage', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/final-page.html'
  };
});

app.directive('rules', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/rules.html'
  };
});

app.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, default_width: 600,
      default_height: 500,});
  }
})