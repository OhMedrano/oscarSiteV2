'use strict';

/**
 * @ngdoc service
 * @name oscarSiteV2App.Blog
 * @description
 * # Blog
 * Service in the oscarSiteV2App.
 */
angular.module('oscarSiteV2App')
  .service('Blog', function ($resource,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return $resource('http://159.203.107.182:3000/api/articles/',{
  		query:{
  			method:'GET',
  			params:{
  				blogId:'blogs'
  			},
  			isArray:true
  		}
  	});

  });
