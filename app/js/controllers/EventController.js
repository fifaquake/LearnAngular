"use strict";

eventsApp.controller('EventController',
  function EventController($scope, eventData) {
    $scope.snippet = '<span style="color:red">hi there </span>';
	//$scope.sortorder = 'upVoteCount';
	//$scope.sortorder = '-upVoteCount';
	$scope.sortorder = 'name';
	$scope.boolValue = true;
	$scope.mystyle = { color: 'red' };
	$scope.myclass = 'blue';
	$scope.buttonDisabled = true;
    $scope.event = eventData.event;

		$scope.upVoteSession = function (session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function (session) {
			session.upVoteCount--;
		};

  }
);
