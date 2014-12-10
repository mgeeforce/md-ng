(function() {
    'use strict';

    function ReportCtrl($scope, $mdSidenav, $mdDialog) {

    	$scope.subheader = 'Expense Reports';

    	$scope.reports = [
	      {
	        'id': '1',
	        'name': 'Mt. Hood',
	        'date': 1417560710,
	        'description': 'U18 expense report',
	        'amount': 857.87,
	        'status': 'Approved',
	        'allocated': true
	      },
	      {
	        'id': '2',
	        'name': 'Colorado',
	        'date': 1417560509,
	        'description': 'U18 expense report',
	        'amount': 375.00,
	        'status': 'Submitted',
	        'allocated': true
	      },
	      {
	        'id': '3',
	        'name': 'Norquay',
	        'date': 1417560509,
	        'description': 'U18 expense report',
	        'amount': 14088.76,
	        'status': 'Pending',
	        'allocated': false
	      }
    	];
    $scope.predicate = '-name';

    $scope.toggleSort = function(property) {
    	return $scope.reports.sort(dynamicSort(property));
	};

    function dynamicSort(property) {
    	var sortOrder = 1;
    	if(property[0] === "-") {
    		sortOrder = -1;
    		property = property.substr(1);
    	}
    	return function(a,b) {
    		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        	return result * sortOrder;
    	}
    }	

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
        .controller('ReportCtrl', ReportCtrl);
    
    ReportCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog'];


})();
