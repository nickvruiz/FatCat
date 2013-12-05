'use strict';

angular.module('NewApp')
  .factory('submitContactForm', function ($http) {
    return {
      sendMail: function (data) {
        // console.log(data);
        $http.post('scripts/models/contact.php', data)
             .success(function (data) {
              // Change button to success
             });
      }
    };
  });
