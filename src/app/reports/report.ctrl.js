(function() {
    'use strict';

    function ReportCtrl($scope, $state, $mdSidenav, $mdDialog) {

    	$scope.subheader = 'Expense Reports';

    	$scope.statuses  = ['All','Draft','Submitted','Approved'];

    	$scope.reports = [
	      {
	        'id': '1',
	        'name': 'Mt. Hood',
	        'date': 1417560710000,
	        'description': 'U18 expense report',
	        'amount': 857.87,
	        'status': 'Approved',
	        'allocated': true,
	        'expenses' : [
	        	{
	        		'id': '1',
	        		'merchant': 'Petro Canada',
	        		'amount': 78.90,
	        		'gst': 0.00,
	        		'total': 78.90,
	        		'category': 'Fuel'
	        	}]
	      },
	      {
	        'id': '2',
	        'name': 'Colorado',
	        'date': 1417560509000,
	        'description': 'U18 expense report',
	        'amount': 375.00,
	        'status': 'Submitted',
	        'allocated': true
	      },
	      {
	        'id': '3',
	        'name': 'Norquay',
	        'date': 1418307614000,
	        'description': 'U18 expense report',
	        'amount': 14088.76,
	        'status': 'Pending',
	        'allocated': false
	      },
	      {
	        'id': '4',
	        'name': 'October',
	        'date': 1415024414000,
	        'description': 'U18 expense report',
	        'amount': 188.76,
	        'status': 'Pending',
	        'allocated': false
	      },
	      {
	        'id': '5',
	        'name': 'September',
	        'date': 1412346014000,
	        'description': 'U18 expense report',
	        'amount': 314.76,
	        'status': 'Pending',
	        'allocated': true
	      }
    	];

	  $scope.predicate = '-name';

   	  $scope.close = function() {
	    $scope.reportSelected = false;
	    $mdSidenav('right').close();
	  };

	  $scope.select = function(report) {
	  	console.log('report named '+report.name+' selected');
	    $state.go('home.reports.submitted.detail', {id: report.id});
	    $scope.reportSelected = true;
	    $scope.selectedReport = report;
	    //$mdSidenav('right').open();
	    //console.log($mdSidenav('right').isOpen());
	  };

   	  $scope.rightToggle = function() {
	    $mdSidenav('right').toggle();

	  };

	  $scope.newReport = function(ev) {
	    $mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'app/reports/new-report.html',
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
    
    ReportCtrl.$inject = ['$scope', '$state', '$mdSidenav', '$mdDialog'];


})();
