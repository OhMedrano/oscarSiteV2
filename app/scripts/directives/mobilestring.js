'use strict';

/**
 * @ngdoc directive
 * @name oscarSiteV2App.directive:mobileString
 * @description
 * # mobileString
 */
angular.module('oscarSiteV2App')
  .directive('mobileString', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mobileString directive');
      }
    };
  });
