'use strict';

angular.module('roadtrip', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home.material', {
      	url: '/material',
      	templateUrl: 'app/material/material.html',
      	controller: 'MaterialCtrl'
      });

    $urlRouterProvider.otherwise('/home');
  })
;
