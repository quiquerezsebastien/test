'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('DemoCtrl', function ($routeParams, data, $http) {
    
    var demo = this;

    demo.data = data;

    demo.c = $routeParams.unchiffre;

    demo.data.getData(demo.c)


  });
