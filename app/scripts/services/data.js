'use strict';

/**
 * @ngdoc service
 * @name testApp.data
 * @description
 * # data
 * Service in the testApp.
 */
angular.module('testApp')
  .service('data', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  
  this.movie = ['hello','world'];
  
  this.add = function(el){
      this.movie.push(el);
    };

   this.remove = function(el){
     this.movie.splice(this.movie.indexOf(el));
   }

  });
