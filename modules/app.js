var app = angular.module("mainModule", ["myModule","ngTagsInput"]);

app.controller("TagInputCtrl",TagInputCtrl);

function TagInputCtrl(){
    this.tagsInput=[
        {text:"Batman"},
        {text:"Superman"},
        {text:"Flash"},
        {text:"Ironman"}
    ]
}