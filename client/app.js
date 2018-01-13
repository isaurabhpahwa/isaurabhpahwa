'use strict';

var App = angular.module('myFirstApp',['ui.router','appMain']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/app/home");

	$stateProvider
	.state('app', {
	url: "/app",
	abstract: true
	})
	}]);