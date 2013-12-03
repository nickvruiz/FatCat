'use strict';

angular.module('NewApp')
  .controller('MainCtrl', function ($scope, $timeout, submitContactForm) {

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
        description: 'location scouting / photography',
        category: 'photo',
        icon: 'camera',
        link: 'http://lrds.tv',
        extras:[0]
      },
      { id: 1,
        client: 'element eden',
        description: 'motion graphics',
        category: 'motion',
        icon: 'video-camera',
        link: 'http://elementeden.com/us/',
        extras:[0]
      },
      { id: 2,
        client: 'jac vanek',
        description: 'repsonsive design / development / ecommerce',
        category: 'web',
        icon: 'desktop',
        link: 'http://jacvanek.com',
        extras:[0]
      },
      { id: 3,
        client: 'good libations brewing',
        description: 'product photography / compositing',
        category: 'photo',
        icon: 'camera',
        link: 'http://goodlibationsbrewing.com',
        extras: [1,2]
      }
    ];

    // $scope.move = true;
    // $scope.show = true;

    $scope.selectedIndex = $scope.portfolioId = $scope.extraId = 0;

    $scope.fade = function () {
      $scope.show = !$scope.show;
    }

    $scope.setMainBlock = function (id) {
      $scope.extraId = id;
    }

    $scope.showContactPage = function () {
      $scope.portfolioExtraState = false;
      $scope.fade();
    }

    $scope.showPortfolioExtras = function (id) {
      $scope.portfolioExtraState = true;
      $scope.portfolioId = id;
      $scope.fade();
    }

    $scope.expand = function () {
      $scope.grow = !$scope.grow;
    }

    $scope.filterCategory = function (category) {
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