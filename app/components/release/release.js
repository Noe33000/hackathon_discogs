"use strict";

angular.module("discogs")
    .component("release", {
        templateUrl: "app/components/release/release.html",
        controller: ReleaseDetail
    })


function ReleaseDetail(Release, $state, $stateParams) {
    // On récupère l'id transmis dans l'URL
    let idRelease = $stateParams.id;
    
    // On va chercher dans l'API toutes les informations liées à l'artiste dont l'id correspond
    //this.artist = Artist.get({id: idArtist});
    
    this.release = Release.get({id: idRelease});
}