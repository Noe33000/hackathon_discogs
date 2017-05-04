"use strict";

angular.module("discogs")
    .component("artist", {
        templateUrl: "app/components/home/home.html",
        controller: ArtistDetail
    })


function ArtistDetail( $state, $stateParams) {
    let id = $stateParams.id;
    console.log("plouf :" + id);
}