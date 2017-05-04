"use strict";

angular.module("discogs")
    .component("artist", {
        templateUrl: "app/components/artist/artist.html",
        controller: Artist
    })

function Artist(Release, Label, $stateParams, $state) {
    $stateParams.artistId;
    console.log('test');
}