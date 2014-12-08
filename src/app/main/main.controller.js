'use strict';

angular.module('roadtrip')
  .controller('MainCtrl', function ($scope, $location) {

  $scope.goHome = function() {
    //menu.selectPage(null, null);
    $location.path( '/' );
  };
});
