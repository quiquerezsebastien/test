'use strict';

/**
 * @ngdoc service
 * @name testApp.data
 * @description
 * # data
 * Service in the testApp.
 */
angular.module('testApp')
  .service('data', function ($http, $routeParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  
  this.movie = ['hello','world'];
  var data = this;
  this.add = function(el){
      this.movie.push(el);
    };

    this.object = {
      titre:"un titre",
      description:"une desc",
      id:3
    };

   this.remove = function(el){
     this.movie.splice(this.movie.indexOf(el));
   }

   data.getMovies = function(){
      var promise = $http.get('http://tel.search.ch/api/?was=john+meier&key=Votre clé');
      promise.then(function(result){
        data.moviesPopular = result.data.results;
      });
    }

    data.getData = function(id){
      var promise = $http.get('http://amc.ig.he-arc.ch:3003/movie/'+id);
      promise.then(function(result){
        data.movieData = result.data;
      });
    }
    

   

  });