
"use strict";

angular.module("discogs", [
    // les dépendances externes
    "ui.router",
    "ngResource"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            }
            // {
            //     name: "pageNotFound",
            // }
        ];
        $urlRouterProvider.otherwise("/home");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    });