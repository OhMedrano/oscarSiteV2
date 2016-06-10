'use strict';

/**
 * @ngdoc filter
 * @name oscarSiteV2App.filter:lineBreak
 * @function
 * @description
 * # lineBreak
 * Filter in the oscarSiteV2App.
 */
angular.module('oscarSiteV2App')
  .filter('lineBreak', function () {
    return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
    };
  });
