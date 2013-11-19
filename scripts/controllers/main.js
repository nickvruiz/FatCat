'use strict';

angular.module('NewApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    $scope.pages = [
      { icon:'desktop', action:'slide', dir:'-1'},
      { icon:'envelope', action:'fade'},
      { icon:'info', action:'slide', dir:'1'}
    ];

    $scope.portfolioPieces = [
      { client:'lrds', category:'photography' },
      { client:'lrds', category:'video' },
      { client:'lrds', category:'photography' },
      { client:'lrds', category:'video' },
      { client:'lrds', category:'photography' },
      { client:'lrds', category:'video' }
    ];

    // $scope.move = true;

    $scope.fade = function () {
      $scope.show = !$scope.show;
    }

    $scope.expand = function () {
      $scope.grow = !$scope.grow;
    }

     $scope.filterCategory = function ($category) {
      console.log($category);
      $scope.category = '';
      $scope.category = $category;
    }

    $scope.slide = function (dir) {
      var distance = Math.floor(dir) * 100;
      $scope.slideDir = 'top:' + distance + '%';
      $scope.move = !$scope.move;
    }

    // $scope.slideClear = function () {
    //   $scope.slideReset = true;
    // }

    $scope.menuState = function () {
      $scope.navState = !$scope.navState;
    }

  });