(function() {
    'use strict';

    function ReportCtrl($scope, $state, $mdSidenav, $mdDialog, reports) {

    	$scope.subheader = 'Expense Reports';

    	$scope.statuses  = ['All','Draft','Submitted','Approved'];

    	$scope.reports = reports.reports;


	  $scope.predicate = '-name';

   	  $scope.close = function() {
	    $scope.reportSelected = false;
	    $mdSidenav('right').close();
	  };

	  $scope.select = function(report) {
	  	console.log('report named '+report.name+' selected');
	    $state.go('home.roadtrips.detail', {id: report.id});
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
    
    ReportCtrl.$inject = ['$scope', '$state', '$mdSidenav', '$mdDialog', 'ReportSvc'];


})();
