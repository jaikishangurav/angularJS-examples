(function () {
    var app = angular.module("ContactApp");

    app.service("AppDataServiceSvc", function AppConfig(AppNameSvc){
        this.name = AppNameSvc;
        this.author = "Jack Sparrow";
        this.builtDate = new Date().toDateString();
    }); 
    
})();
