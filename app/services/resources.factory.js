"use strict";

angular.module("discogs")

    .factory("Artist", function($resource) {
        return $resource('https://api.discogs.com/artists/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("Label", function($resource) {
        return $resource('https://api.discogs.com/labels/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    })
    .factory("Release", function($resource) {
        return $resource('https://api.discogs.com/releases/:id', {id: '@id', key: "fpGYiblwrVtRlaJQmfoX", secret: "LPlyPcMzpdqusNFZuoTSVaqeqZDCKzxf"});
    });