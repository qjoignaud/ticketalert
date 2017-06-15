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

	    $scope.tools = [
	      {text:'Mantis Bug Tracker', isselected : false},
	      {text:'Team Foundation Server', isselected : false},
	      {text:'Slack', isselected : false},

      	];
 
	    $scope.addTool = function() {
	      $scope.tools.push({text:$scope.toolname, isselected : false});
	      $scope.toolname = '';
	    };
	 	 
	    $scope.deleteTool = function() {
	      var oldTools = $scope.tools;
	      $scope.tools = [];
	      angular.forEach(oldTools, function(tool) {
	        if (!tool.isselected) $scope.tools.push(tool);
	      });
	    }; 

	    $scope.checked = function() {

		    var count = 0;
		    angular.forEach($scope.tools, function(value){
		        if (value.isselected) count++;
		    });

		    return count;

	    };


});
	  