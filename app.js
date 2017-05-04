
"use strict";

angular.module("discogs", [
    // les dépendances externes
    "ui.router"
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
        $urlRouterProvider.otherwise("/404");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    })

;