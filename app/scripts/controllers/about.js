'use strict';

/**
 * @ngdoc function
 * @name oscarSiteV2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oscarSiteV2App
 */
angular.module('oscarSiteV2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.switched = true;

  	$scope.skillSet = [
  			{'name':'Web',
  			'skill':[
  					{'skill':'Html5','exp':100},
  					{'skill':'CSS','exp':90},
  					{'skill':'JavaScript','exp':80},
  					{'skill':'NodeJS','exp':65},
  					{'skill':'AngularJS','exp':75},
  					{'skill':'Ruby','exp':50},
  					{'skill':'Rails','exp':40}
  				]
  			},
  			{'name':'Tech',
  				'skill':[
  					{'skill':'VmWare','exp':100},
  					{'skill':'Git','exp':95},
  					{'skill':'Unix','exp':75},
  					{'skill':'Windows','exp':87},
  					{'skill':'Adobe Photoshop','exp':78},
  					{'skill':'Adobe Illustrator','exp':75}

  				]
  			},
  			{'name':'Personal',
  				'skill':[

	  			{'skill':'Guitar','exp':82},
	  			{'skill':'Piano/Keyboard','exp':35},
  				{'skill':'Soccer','exp':50},
  				{'skill':'Arudinos','exp':40},
  				{'skill':'Cooking','exp':85},
  				{'skill':'Beating my friends in video games','exp':100}


  				]
  			}
  	];

  	$scope.workHist = [

  				{'name':'Freelance IT',
  					'position':'Technician',
  				 'location':'New York',
  				  'startDate':'August 1, 2014',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Building custom desktops',
  				 	'Hardware/Software installation',
  				 	'General Troubleshooting'
  				 	


  				 ]},
  				 {'name':'Konditori',
  				 	'position':'Barista',
  				 'location':'New York',
  				  'startDate':'October 14, 2013',
  				  'endDate':'NA',	
  				  'present':true,
  				 'respon':[
  				 	'Keyholder for multiple stores',
  				 	'Direct customer engagment',
  				 	'Knowledge of products',
  				 	'Makes a pretty good latte'


  				 ]},
  				 {'name':'CitiGroup',
  				 'position':'Intern System Adminstrator',
  				 'location':'New York',
  				  'startDate':'March 2014',
  				  'endDate':'June 2014',	
  				  'present':false,
  				 'respon':[
  				 	'Troubleshoot on trade floor',
  				 	'General Maintenance',
  				 	'Virus Removal',
  				 	'Building and Deploying'


  				 ]}





  	]

  });
