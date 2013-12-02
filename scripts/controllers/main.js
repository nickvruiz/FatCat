'use strict';

angular.module('NewApp')
  .controller('MainCtrl', function ($scope, submitContactForm) {

    $scope.pages = [
      { icon:'desktop',  action:"slide('top')"},
      { icon:'envelope', action:'fade()'},
      { icon:'info',     action:"slide('btm')"}
    ];

    $scope.portfolioCategories = [
      { name: 'all',
        filter: '',
        icon: 'list',
      },
      { name: 'web',
        filter: 'web',
        icon: 'desktop',
      },
      { name:'photo',
        filter:'photo',
        icon: 'camera',
      },
      { name: 'motion',
        filter: 'motion',
        icon: 'video-camera',
      },
    ];

    $scope.portfolioPieces = [
      { id: 0,
        client: 'lrds',
        description: 'We saw this photoshoot all the way through. From scouting a rooftop location in downtown San diego to post production.',
        category: 'photo',
        icon: 'camera',
        link: 'http://lrds.tv',
        extras:[0]
      },
      { id: 1,
        client: 'element eden',
        description: 'We took static graphics provided by the element eden team and transformed them into moving elements within the video. This provided movement and energy to the static imagery being used in the edit.',
        category: 'motion',
        icon: 'video-camera',
        link: 'http://elementeden.com/us/',
        extras:[0]
      },
      { id: 2,
        client: 'jac vanek',
        description: 'Description',
        category: 'web',
        icon: 'desktop',
        link: 'http://jacvanek.com',
        extras:[0]
      },
      { id: 3,
        client: 'good libations brewing',
        description: 'Description',
        category: 'photo',
        icon: 'camera',
        link: 'http://goodlibationsbrewing.com',
        extras: [1,2]
      }
    ];

    $scope.move = true;
    // $scope.show = true;

    $scope.selectedIndex = $scope.portfolioId = $scope.extraId = 0;

    $scope.fade = function (bool) {
      $scope.portfolioExtraState = bool;
      $scope.show = !$scope.show;
    }

    $scope.setMainBlock = function (id) {
      $scope.extraId = id;
    }

    $scope.setPortfolioExtraState = function (id) {
      // console.log(id);
      $scope.portfolioId = id;
      $scope.fade(true);
    }

    $scope.expand = function () {
      $scope.grow = !$scope.grow;
    }

    $scope.filterCategory = function (category) {
      console.log(category);
      $scope.categoryFilter = category;
      $scope.selectedIndex  = this.$index;
    }

    $scope.navMenuTransition = function () {
      $scope.move = !$scope.move;
      $scope.meta = !$scope.meta;
      $scope.grow = false;
    }

    $scope.slide = function (dir) {
      $scope.navMenuTransition();
      $scope.slideDir = 'slide-page-' + dir;
    }

    $scope.menuState = function () {
      $scope.navState = !$scope.navState;
    }

    $scope.contactFatCat = function () {
      var data = [{
        uname:    $scope.username,
        uemail:   $scope.email,
        usubject: $scope.subject,
        umessage: $scope.message
      }];
      submitContactForm.sendMail('hello');
    }

  });