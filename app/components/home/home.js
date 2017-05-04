"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home(Artist) {
    this.artist = Artist.get({id: "3422"});
    this.test = "testIsOk";
}