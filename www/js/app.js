angular.module('App', ['ionic'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('search', {
			url: '/search',
			controller: 'SearchController',
			templateUrl: 'views/search/search.html'
		});

	$urlRouterProvider.otherwise('/search');
}) 

.factory('Settings', function() {
	var Settings = {
		units: 'us',
		days: 8
	};
	return Settings;
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
