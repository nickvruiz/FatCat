'use strict';

angular.module('NewApp')
  .factory('submitContactForm', function ($http) {
    return {
      sendMail: function (data) {
        JSON.stringify(data);
        $http.post('../contact.php', data)
             .success(function () {
                console.log('Form Submitted');
             });
      }
    };
  });
