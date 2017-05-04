"use strict";

angular.module("discogs")
    .component("artist", {
        templateUrl: "app/components/artist/artist.html",
        controller: ArtistDetail
    })


function ArtistDetail(ArtistReleases, Artist, Label, Release, $state, $stateParams) {
    // On récupère l'id transmis dans l'URL
    let idArtist = $stateParams.id;
    
    // On va chercher dans l'API toutes les informations liées à l'artiste dont l'id correspond
    this.artist = Artist.get({id: idArtist});
    
    this.releases = ArtistReleases.get({id: idArtist});
}