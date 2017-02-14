var myModule=angular.module("myModule",[]);

myModule.controller("MyModuleCtrl", MyModuleCtrl);

function MyModuleCtrl(){
    this.helloModule="This is from my module";
}