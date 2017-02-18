(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc,AppDataServiceSvc) {
    this.contacts = ContactDataSvc.contacts;

    
    this.appTitle=AppDataServiceSvc.name;

    this.selectedContact = this.contacts[0];

    this.selectContact = function (index) {
        this.selectedContact = this.contacts[index];
    }
}
    
})();
