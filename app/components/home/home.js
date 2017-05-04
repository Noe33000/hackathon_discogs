"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home(Artist) {
    let artistsId =  [
        "791",
        "65049",
        "133768",   // Big Pun
        "41441",    // Bob Marley
        "10584",    // Nina Simone
        "15588",    // Gonzalez
        "15588",    // Gonzalez
        "15588",    // Gonzalez        
    ];
    let a = [];
    
    angular.forEach(artistsId, function(v, k) {
        a.push(Artist.get({id: v}));
    });
    
    this.artists = a;
    console.log(this.artists);
}