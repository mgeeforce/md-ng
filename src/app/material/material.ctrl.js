(function() {
    'use strict';

    function MaterialCtrl($scope, $mdSidenav, $mdDialog) {

    	$scope.subheader = 'Reports List';

    	$scope.reports = [
	      {
	        'id': '1',
	        'name': 'Colorado',
	        'date': 1417560509,
	        'description': 'U18 expense report',
	        'allocated': false
	      },
	      {
	        'id': '2',
	        'name': 'Colorado',
	        'date': 1417560509,
	        'description': 'U18 expense report',
	        'allocated': true
	      }
    	];


   	  $scope.close = function() {
	    $mdSidenav('left').close();
	  };

   	  $scope.rightToggle = function() {
	    $mdSidenav('right').toggle();
	  };

	  $scope.newReport = function(ev) {
	    $mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'app/material/new-report.html',
	      targetEvent: ev,
	      locals: { 
	      	reports: $scope.reports
	      }
	    })
	    .then(function(answer) {
	      $scope.alert = 'You said the information was "' + answer + '".';
	    }, function() {
	      $scope.alert = 'You cancelled the dialog.';
	    });
	  };


    }

    function DialogController($scope, $mdDialog, reports) {
    	//$scope.report = report;
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.save = function(report) {
	  	console.log($scope);
	  	reports.splice(0,0,report);
	    $mdDialog.hide(report);
	  };
	}

    angular
        .module('roadtrip')
        .controller('MaterialCtrl', MaterialCtrl);
    
    MaterialCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog'];


})();
