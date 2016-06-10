'use strict';

/**
 * @ngdoc directive
 * @name oscarSiteV2App.directive:mobileMenu
 * @description
 * # mobileMenu
 */
angular.module('oscarSiteV2App')
  .directive('mobileMenu', function () {
    return {
    	scope:{
    		ready: '=ready'
    	},
      templateUrl: 'templates/mobileMenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        	scope.mobile;
          scope.chev = 'right';
        	scope.mobileOff = function(){
        		 if(scope.mobile == true){
              //THIS TAKES IT OUT, DAMNIT REMEMBER THAT THIS POINTS RIGHT
              scope.chev = 'right';
        		 	scope.mobile = false;
        		 	console.log(scope.mobile);
        		 	$('#displayMenu').removeClass('animated fadeInRight');
        		 	$('#displayMenu').addClass('animated fadeOutRight');
        		 } else {
              //THIS PUTS IT IN.  YOU WANT THIS TO GO POINT LEFT
              scope.chev = 'left';
        		 	$('#displayMenu').removeClass('animated fadeOutRight');
        		 	$('#displayMenu').addClass('animated fadeInRight');
        		 	scope.mobile = true;
        		 	console.log(scope.mobile);

        		 }
        	}
      }
    };
  });
