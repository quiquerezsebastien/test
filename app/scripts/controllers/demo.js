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

    demo.c = $routeParams.unchiffre;

    demo.getMovies = function(){
      var promise = $http.get('http://amc.ig.he-arc.ch:3003/discover/movie?sort_by=popularity.desc');
      promise.then(function(result){
        demo.moviesPopular = result.data.results;
      });
    }

    demo.getMovies();
  });
