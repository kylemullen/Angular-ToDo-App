(function()	{
	"use strict";

	angular.module("app").controller("todoCtrl", function($scope) {
		
		$scope.tasks = [
		{ text: "Wake Up",
			complete: false
		}


		];
	
		$scope.addTask = function(taskEntry) {
			if (taskEntry)	{
				var newTask = {
					text: taskEntry,
					complete: false
									}
				$scope.tasks.push(newTask);
				alert("Task Added");
				$scope.taskEntry = "";
				}
		
		};

		$scope.makeTaskComplete = function(task)	{

			   task.complete = true;
			   
			};


		window.scope = $scope;
	});
}());