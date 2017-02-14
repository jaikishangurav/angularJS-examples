var app = angular.module("moreDirectivesApp", []);
app.controller("MoreDirectivesCtrl", MoreDirectivesCtrl);

function MoreDirectivesCtrl() {
    this.myList=[
        {"name":"Foo","age":20},
        {"name":"Boo","age":25},
        {"name":"Moo","age":15},
        {"name":"Roo","age":30}
    ];
}
