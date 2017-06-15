/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via Restangular
 * - exposes the model to the template and provides event handlers
 *
 * root_path & assets_path variables are set inside index.html.twig globally
 *
 * @type {angular.Module}
 */



	app.controller("accountCtrl", function($scope, $rootScope){

		$scope.vm = {
	      formData : {
	      	tool : 'Mantis Bug Tracker',
	      	login : 'quentin.joignaud',
	      	password : 'test',
	        email : 'quentin.joignaud@modisfrance.fr',
	       	phone : '0669359684'
	      }
	    };

	    $scope.tools = [
		    {id : 1, name : 'Mantis Bug Tracker'},
		    {id : 2, name : 'Team Foundation Server'},
		    {id : 3, name : 'Slack'}
	    ];


	   $scope.account = {};
	   
	   $scope.account.login = '';
	   $scope.account.password = '';
	   $scope.account.email = '';
	   $scope.account.phoneNumber = '';
	   
	   $scope.checkLog = function() {
		alert('checkLog');
	   };
	   

	   $scope.resetForm = function(form_) {
		form_.login.$error = {};
		form_.password.$error = {};
		form_.email.$error = {};
		form_.phoneNumber.$error = {};
		form_.$setPristine();
		form_.$setValidity();
		form_.$setUntouched();
	  };
});
	  