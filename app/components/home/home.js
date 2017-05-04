"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home($scope,Artist) {
    let artistsId =  [
        "791",
        "65049"
        // "133768",
        // "41441",
        // "10584",
        // "",
        // ""
    ];
    let a = [];
    angular.forEach(artistsId, function(v, k) {
        console.log(v);
        a.push(Artist.get({id: v}));
    });
    this.artists = a;
        console.log(this.artists);

}