"use strict";

eventsApp.controller('EventController', 
  function EventController($scope) {
    $scope.snippet = '<span style="color:red">hi there </span>';
	$scope.boolValue = true;
	$scope.mystyle={color:'red'};
	$scope.myclass='blue';
	$scope.buttonDisabled=true;
    $scope.event = {
	  name : 'Angular Boot Camp',
	  date : '1/1/2013',
	  time : '10:30 am',
	  location: {
	    address: 'Google Headquarters',
		city:  'ShangHai',
		privince: 'ShangHai'
	  },
	  imageUrl: '/img/angularjs-logo.png',
	  sessions:[
	    {
		  name:'Directives MasterClass',
		  creatorName:'Bob Smith',
		  duration:'1hr',
		  level:'Advanced',
		  abstract:'In this session you will learn the ins and outs of directive',
		  upVoteCount: 0
		},
	    {
		  name:'Scopes for fun and profit',
		  creatorName:'John doe',
		  duration:'10min',
		  level:'Introductory',
		  abstract:'This session will take a closer look at scopes',
		  upVoteCount: 0
		},
	    {
		  name:'Well Behaved Controller',
		  creatorName:'Jane Doe',
		  duration:'2 hours',
		  level:'Intermedia',
		  abstract:'Controllers are the begining of everything',
		  upVoteCount: 0
		}
	  ]
	}

	$scope.upVoteSession = function(session) {
	  session.upVoteCount++;
	};

	$scope.downVoteSession = function(session) {
	  session.upVoteCount--;
	};

  }
);
