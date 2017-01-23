angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages',{
                url:'/packages',
                controller: 'packageCtrl',
                templateUrl: "../views/packages.html"
            })
            .state('locations',{
                url: '/locations',
                controller: 'locationsCtrl',
                templateUrl: "../views/locations.html"
            })
            .state('booked',{
                url: '/booked/:id',
                controller: 'bookedCtrl',
                templateUrl: "../views/booked.html"
            })
            .state('adventures',{
                url: '/adventures',
                parent: 'home',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('contact',{
                url: '/contact',
                parent: 'home',
                templateUrl: "../views/about.html"
            })

        $urlRouterProvider
            .otherwise('/');
    });
