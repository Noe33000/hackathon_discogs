
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
            },
            {
                name: "artist",
                url: "/artist/:id",
                component: "artist"
            },
            // {
            //     name: "pageNotFound",
            // }
        ];
        $urlRouterProvider.otherwise("/home");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    });