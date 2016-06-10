'use strict';

/**
 * @ngdoc directive
 * @name oscarSiteV2App.directive:skillExp
 * @description
 * # skillExp
 */
angular.module('oscarSiteV2App')
  .directive('skillExp', function () {
    return {
    	scope:{
    		exp: '=exp'
    	},
      templateUrl: 'templates/skillExp.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.expNum = scope.exp;
        scope.colored;
        scope.skillLvl;

        scope.expColor = function(exp){

        	if(exp<=20){
        		scope.colored = '#7a7a6e';
        		scope.skillLvl = 'Beginner';
        	} else if(exp<=50){
        		scope.colored = '#818577'
				scope.skillLvl = 'Intermediate';
        	} else if(exp<=75){
        		scope.colored = '#6d6e6c'
				scope.skillLvl = 'Advanced';
        	} else if(exp==100){
        		scope.colored = '#6e7a71'
				scope.skillLvl = 'Master';
        	} 
        	else {
        		scope.colored = '#788577'
 				scope.skillLvl = 'Proficent';
        	};

        	return scope.colored;

        };

        scope.expColor(scope.expNum);



      }
    };
  });
