'use strict';

angular.module('roadtrip', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home.reports', {
      	url: '/reports',
      	templateUrl: 'app/reports/reports.html',
      	controller: 'ReportCtrl',
        resolve: {
          reports: function(ReportSvc) {
            return ReportSvc.getReports();
          }
        }
       })
      .state('home.reports.submitted', {
        url: '/submitted',
        templateUrl: 'app/reports/reports.html',
        controller: 'ReportCtrl',
        resolve: {
          reports: function(ReportSvc) {
            return ReportSvc.getReports();
          }
        }
      })
      .state('home.reports.submitted.detail', {
        url: '/:id',
        views: {
          'detail@home': {
          templateUrl: 'app/reports/report.html',
          controller: 'ReportDetailCtrl',
          resolve: {
            data: function($stateParams, ReportSvc) {
              return ReportSvc.getReport($stateParams.id);
            }
          }
          }
        }
      })
      .state('home.expenses', {
      	url: '/expenses',
      	templateUrl: 'app/expenses/expenses.html',
      	controller: 'ExpenseCtrl'
      })
      .state('home.receipts', {
      	url: '/receipts',
      	templateUrl: 'app/receipts/receipts.html',
      	controller: 'ReceiptCtrl'
      });

    $urlRouterProvider.otherwise('/home');
  })

;
