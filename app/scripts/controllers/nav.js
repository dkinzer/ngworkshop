angular.module( 'libertyjsApp' ).controller( 'NavCtrl',
  function ( $scope, $location ) {

    //TODO: ADD THE ABOUT PAGE
    $scope.menu = [
      {
        'title': 'Home',
        'link': '#/'
      },

      {
        'title': 'About',
        'link': '#/about'
      }
    ];

    $scope.isActive = function( route ) {
      return route === "#" + $location.path();
    };
  }
);
