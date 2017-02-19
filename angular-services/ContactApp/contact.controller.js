(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc, AppDataServiceSvc) {
        var self = this;
        self.editMode = false;
        self.addMode=false;
        self.contacts = [];
        ContactDataSvc.getContacts().then(function (data) {
            self.contacts = data;
        });

        this.appTitle = AppDataServiceSvc.name;

        this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            self.successMessage=undefined;
            self.errorMessage=undefined;
        }

        this.toggleEditMode = function () {
            self.editMode = !self.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;
            if(self.addMode){
                ContactDataSvc.createUser(userData).
                then(function () {
                    self.successMessage = "Data successfully updated";
                },function(){
                    self.errorMessage="There was an error. Please try again later.";
                });
                self.addMode=false;
            }else{
            ContactDataSvc.saveUser(userData).
                then(function () {
                    self.successMessage = "Data successfully updated";
                },function(){
                    self.errorMessage="There was an error. Please try again later.";
                });
            }
        }

        this.addContact=function(){
            self.addMode=true;
            self.selectedContact={
                "id":new Date().toDateString()
            }
            self.editMode=true;
        }
    }

})();
