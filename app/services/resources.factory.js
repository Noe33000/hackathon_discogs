"use strict";

angular.module("discogs")

    .factory("Artist", function() {
        return $resource('https://api.discogs.com/artistes/:id');
    })
    .factory("Label", function() {
        return $resource('https://api.discogs.com/labels/:id');
    })
    .factory("Release", function() {
        return $resource('https://api.discogs.com/releases/:id');
    });



    
