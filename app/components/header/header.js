"use strict";

angular.module("discogs")
    .component("header", {
        templateUrl: "app/components/header/header.html",
        controller: Header
    })


function Header() {
    this.selectOptions =  [
        {
            value: "artists",
            name: "Artist"
        },
        {
            value: "releases",
            name: "Album"
        },
        {
            value: "labels",
            name: "Label"
        }
    ];
    this.currentYear = new Date().getFullYear();

    this.search = {
        type: this.selectOptions[0].value,
        gebre: "",
        year: "",
        country: ""
    };
}