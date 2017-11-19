'use strict';

 // define phoneList module
 angular.module('phoneList', []);

 // component
 angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: './phone-list/phone-list.html',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Sony'
            }, {
                name: 'Iphone'
            }, {
                name: 'Samsung'
            }, {
                name: 'BlackBerry'
            }
        ];
    }
 });