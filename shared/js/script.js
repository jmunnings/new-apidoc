'use strict';

var apidocs = angular.module('apidocs', []);

apidocs.controller('Ctrl', function Ctrl($rootScope) {
	if ($rootScope.baseurl == null) {
  		$rootScope.baseurl = "http://api-sandbox.oanda.com";
  	};
});