"use strict";

angular.module("discogs")
    .component("label", {
        templateUrl: "app/components/label/label.html",
        controller: LabelDetail
    })


function LabelDetail(Artist, Label, Release, $state, $stateParams) {
    // On récupère l'id transmis dans l'URL
    let idLabel = $stateParams.id;
    
    // On va chercher dans l'API toutes les informations liées à l'artiste dont l'id correspond
    this.label = Label.get({id: idLabel});
    
}