angular.module( 'libertyjsApp',
  [
    'ngRoute',
    'ngResource'
  ]
)
.config(
  function ( $routeProvider ) {
    // TODO: ADD THE ABOUT ROUTE
    $routeProvider
      .when( '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      } )
      .when( '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      } )
      .otherwise( {
        redirectTo: '/'
      } );
  }
);
