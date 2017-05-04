"use strict";

angular.module("discogs")

    .factory("Artist", function($resource) {
        return $resource('https://api.discogs.com/artists/:id')
    })
    .factory("Label", function($resource) {
        return $resource('https://api.discogs.com/labels/:id');
    })
    .factory("Release", function($resource) {
        return $resource('https://api.discogs.com/releases/:id');
    });