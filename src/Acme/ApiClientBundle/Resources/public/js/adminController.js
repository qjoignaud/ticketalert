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

	   $scope.account = {};
	   
	   $scope.account.login = 'admin';
	   $scope.account.password = 'admin';

	   
	   
	   $scope.checkLog = function() {
		alert('checkLog');
	   };
	   

	   
	   $scope.resetForm = function(form_) {
		form_.login.$error = {};
		form_.password.$error = {};

	  };

});
	  