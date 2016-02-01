app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'tweetC as tweet'
    });

  $urlRouterProvider.otherwise('/');

});
