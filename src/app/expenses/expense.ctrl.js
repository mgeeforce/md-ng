(function() {
    'use strict';

    function ExpenseCtrl($scope, $state, $mdSidenav, $mdDialog, reports) {

    }

    angular
        .module('roadtrip')
        .controller('ExpenseCtrl', ExpenseCtrl);
    
    ExpenseCtrl.$inject = ['$scope', '$state', '$mdSidenav', '$mdDialog', 'ReportSvc'];


})();