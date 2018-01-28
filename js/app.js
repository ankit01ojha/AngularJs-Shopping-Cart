/**
 * Created by Ankit Raj Ojha
 */

var app = angular.module('shopApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'mainController'
        })
        .otherwise({ redirectTo: '/' });

});







