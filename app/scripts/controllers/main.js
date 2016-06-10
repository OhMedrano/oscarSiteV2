'use strict';

/**
 * @ngdoc function
 * @name oscarSiteV2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oscarSiteV2App
 */
angular.module('oscarSiteV2App')
  .controller('MainCtrl', function ($scope,$filter,$routeParams,Blog) {
    	$scope.blogs = Blog.query({blogId:$routeParams.blogId});


    	$scope.oscarBlogs = function(){
    		return $filter('createdBy')($scope.blogs);
    	};



    	$scope.viewby = 4;
    	$scope.currentPage = 1;
    	$scope.itemsPerPage = $scope.viewby;
    	$scope.maxSize = 5;


    	$scope.setPage = function(pageNun){
    		$scope.currentPage = pageNun;

    	};

    	$scope.pageChanged = function(){
    		console.log('On Page' + $scope.currentPage);
    	};
    	$scope.setItemsPerPage = function(num){
    		$scope.itemsPerPage = num;
    		$scope.currentPage = 1;
    	}
  });
