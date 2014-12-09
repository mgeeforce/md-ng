'use strict';

angular.module('roadtrip')
  .controller('MainCtrl', function ($scope, $location) {

  $scope.goHome = function() {
    //menu.selectPage(null, null);
    $location.path( '/' );
  };
});

angular.module('roadtrip')
.directive('iconFill', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var object = angular.element(element[0].children[0]);
      if(angular.isDefined(attr.iconFill)) {
        object.load(function () {
          var svg = angular.element(this.getSVGDocument().documentElement);
          svg.attr('fill', attr.iconFill);
        });
      }
    }
  };
});  
