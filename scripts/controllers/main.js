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
        excerpt: 'location scouting / photography',
        description: '<p>"LOS RODRIGUEZ DE SINALOA," brothers from Sinaloa, are an up and coming banda music band.</p><p>They approached us with an idea for an urban photoshoot. So we took the idea, scouted for locations and settled with a rooftop spot in the heart of Downtown San Diego, CA.</p>',
        category: 'photo',
        icon: 'camera',
        link: 'http://lrds.tv',
        extras:[0,1,2,3]
      },
      { id: 1,
        client: 'element eden',
        excerpt: 'motion graphics',
        description: 'Description',
        category: 'motion',
        icon: 'video-camera',
        link: 'http://elementeden.com/us/',
        extras:[0]
      },
      { id: 2,
        client: 'jac vanek',
        excerpt: 'repsonsive design / development / ecommerce',
        description: 'Description',
        category: 'web',
        icon: 'desktop',
        link: 'http://jacvanek.com',
        extras:[0]
      },
      { id: 3,
        client: 'glb',
        excerpt: 'product photography / compositing',
        description: '<p>"GOOD LIBATIONS BREWING" had some bottles of their brew with labels to go along. Our task, to put the labels and bottles togther.</p><p>We started by shooting the bottles and beers/glasses in a studio. When all the dust settled, we brought the RAW images into photoshop and composited the lables on.</p>',
        category: 'photo',
        icon: 'camera',
        link: 'http://goodlibationsbrewing.com',
        extras: [0,1,2]
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
      $scope.extraId = 0;
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