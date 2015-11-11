'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    var main = this;
    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    main.add = function(){
      main.awesomeThings.push(main.message);
    };

    main.deleteElem = function(el){
      main.awesomeThings.splice(main.awesomeThings.indexOf(el));
    };

    main.messageCool = function(){
      main.message = 'Hello ' + main.message + ' Super cool';
    };

    main.isMessageVisible = function(){
      return main.message.length % 2 === 0;
    };

    main.message = "Hello";
  });
