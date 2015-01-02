(function () {
	'use strict';

    function ReportDetailCtrl($scope, $stateParams, $mdSidenav, data) {

        $scope.report = data;

    	console.log($scope.report);
    	$scope.id = $stateParams.id;

        $scope.close = function () {
            $scope.shouldBeOpen = false;
            $mdSidenav('right').close();
        };

        $scope.shouldBeOpen = function () {
            console.log("in detail ctrl with $mdSidenav('right').isOpen() = ");
            console.log($mdSidenav('right').isOpen() + " and $scope.id = "+$scope.id);
            return ($scope.id > 0) && $mdSidenav('right').isOpen();
        };

    	$scope.$on('$viewContentLoaded', 
			function(event){ 
				console.log('$viewContentLoaded event fired :' + event);
		});

        $scope.select = function(report, category) {
            console.log(category);
        };

    }

   angular
    .module('roadtrip')
    .controller('ReportDetailCtrl', ReportDetailCtrl);
    
    ReportDetailCtrl.$inject = ['$scope', '$stateParams', '$mdSidenav', 'data'];

})();