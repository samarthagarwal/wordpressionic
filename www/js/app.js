// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngStorage','ngCordova'])

.run(function($ionicPlatform, $cordovaPush, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    var androidConfig = {
      "senderID": "955383591472"
    };

    $cordovaPush.register(androidConfig).then(function(result) {
      alert(result);
    }, function(err) {
      alert(err);
    })

  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
    })
    .state('main.contentByCategory', {
      url: '/contentByCategory/:catId',
      templateUrl: 'templates/contentByCategory.html',
      controller: 'CatCtrl'
    })
    .state('main.contentRecent', {
      url: '/contentRecent',
      templateUrl: 'templates/menuContent.html',
      controller: 'MainCtrl'
    })
    .state('main.postDetail', {
      url: '/postDetail/:postId',
      templateUrl: 'templates/postDetail.html',
      controller: 'PostCtrl'
    })
    .state('main.favorites',{
      url: '/favorites',
      templateUrl: 'templates/favorites.html',
      controller: 'FavCtrl'
    });

    $urlRouterProvider.otherwise('/main/contentRecent');
})
