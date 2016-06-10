'use strict';

/**
 * @ngdoc function
 * @name oscarSiteV2App.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the oscarSiteV2App
 */
angular.module('oscarSiteV2App')
  .controller('ProjectsCtrl', function ($scope) {
 		$scope.projects = [
   			{'name':'Guitar Tools','web':'http://guitar.colossalOh.com','img':'images/screen/GuitarScreen.png','desc':'Tools to help a guitarist learn their instrument a little easier','done':true},
   			{'name':'Not a PokeDex','web':'http://notpokeDex.colossalOh.com','img':'images/screen/PokeScreen.png','desc':'...Yeah, I made a pokeDex. ','done':false},
   			{'name':'Mock travel website','web':'http://elsy.colossalOh.com','img':'images/screen/ElsyScreen.png','desc':'Guilt tripped into making a site for my mom.'},
   			{'name':'Coffee shop site','web':'http://inprogress.colossalOh.com','img':'images/screen/KondiScreen.png','desc':'First time working on angular for an actual site project. It is not intended for use, and there is no backend for static files. So be prepared for long loads'}
   	];
  });
