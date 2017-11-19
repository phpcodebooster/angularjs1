'use strict';

 // define phoneList module
 angular.module('phoneList', []);

 // component
 angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: './phone-list/phone-list.html',
    controller: function PhoneListController($http) {
        var self = this;
        $http.get('./phone-list/phone-list.json').then(function(response) {
            self.phones = response.data;
        });
    }
 });