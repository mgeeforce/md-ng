(function () {
	'use strict';

    function ReportDetailCtrl($scope, $stateParams, $mdSidenav) {
    	console.log('in detail controller');
    	$scope.id = $stateParams.id;

    	$scope.$on('$viewContentLoaded', 
			function(event){ 
				console.log('$viewContentLoaded event fired :' + event);
		});

    }

   angular
    .module('roadtrip')
    .controller('ReportDetailCtrl', ReportDetailCtrl);
    
    ReportDetailCtrl.$inject = ['$scope', '$stateParams', '$mdSidenav'];

})();