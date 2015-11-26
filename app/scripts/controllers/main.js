'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope,data, $http) {
    var main = this;

    main.getMovies = function(){
      var promise = $http.get('http://amc.ig.he-arc.ch:3003/discover/movie?sort_by=popularity.desc');
      promise.then(function(result){
        main.moviesPopular = result.data.results;
      });
    }

    main.getMovies();

    main.data = data;
    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    main.add = function(){
      data.add(main.message);
    };

    main.deleteElem = function(el){
      data.remove(el);
    };

    main.messageCool = function(){
      main.message = 'Hello ' + main.message + ' Super cool';
    };

    main.isMessageVisible = function(){
      return main.message.length % 2 === 0;
    };

    $scope.mafonctiontri = function(value){
      if(!isNaN(value)){
        return number(value) % 2 === 0;
      }
      return false;
    };

    main.message = "Lite des films";
  });
