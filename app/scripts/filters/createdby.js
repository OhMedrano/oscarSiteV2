'use strict';

/**
 * @ngdoc filter
 * @name oscarSiteV2App.filter:createdBy
 * @function
 * @description
 * # createdBy
 * Filter in the oscarSiteV2App.
 */
angular.module('oscarSiteV2App')
  .filter('createdBy', function () {
    return function (input) {
      var out = [];

      angular.forEach(input, function(author){
      	if(author.creator.fullName === 'Oscar Medrano') {
      		out.push(author);
      	}
      });
      return out;
    };
  });
