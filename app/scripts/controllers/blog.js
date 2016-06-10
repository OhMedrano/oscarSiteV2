'use strict';

/**
 * @ngdoc function
 * @name oscarSiteV2App.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the oscarSiteV2App
 */
angular.module('oscarSiteV2App')
  .controller('BlogCtrl', function ($scope,$routeParams,$http,Blog) {
  		
  		$scope.route = $routeParams.blogId;

  		console.log($scope.route);
  		$http.get('http://159.203.107.182:3000/api/articles').success(function(data){
  			$scope.blog = data.filter(function(entry){
  			
  				return entry._id === $scope.route;
  			})[0];
  		});
  });
