'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('DemoCtrl', function ($routeParams) {
    this.c = $routeParams.unchiffre;
  });
