"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home($resource) {
    this.artist = Artist("3422");
    this.test = "testIsOk";
}