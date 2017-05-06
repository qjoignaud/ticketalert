/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via Restangular
 * - exposes the model to the template and provides event handlers
 *
 * root_path & assets_path variables are set inside index.html.twig globally
 *
 * @type {angular.Module}
 */



	app.controller("adminCtrl", function($scope){
	  'use strict';

	  	$scope.vm = {
	      formData : {
	      	login : 'admin',
	      	password : 'password',
	        confirmPassword : 'password'
	      }
	    };
	   
	   
	   $scope.checkLog = function() {
		alert('checkLog');
	   };
	   


});
	  