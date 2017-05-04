"use strict";

angular.module("discogs")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home(Artist) {
    let artists = [
        "791",      // Mr Oizo
        "65049",   // Notorious
        //"133768",   // Big Pun
        //"41441",    // Bob Marley
        //"10584",    // Nina Simone
        //"15588",    // Gonzalez
        //"3122966"   // Fauve
    ];
    let artistsLength = artists.length;
    
    this.artist = [];
    
    for(let i = 0; i < artistsLength; i++){
        this.artist.push(Artist.get({id: artists[i]}));
    }

    this.test = "testIsOk";


}