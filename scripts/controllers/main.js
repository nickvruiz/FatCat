'use strict';

angular.module('NewApp')
  .controller('MainCtrl', function ($scope, submitContactForm) {

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
        excerpt: 'repsonsive design / wordpress / ecommerce',
        description: '<p>"JAC VANEK" was in need of a new website, blog and online shop.</p><p>So, we utlized the CMS power of Wordpress / Woocommerce together to create a central hub for managing the new site, blog and online store.</p>',
        category: 'web',
        icon: 'desktop',
        link: 'http://jacvanek.com',
        extras:[0,1]
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

    // Shitty tooltip function - bootstrap it / directive...
    $scope.tooltip = function (tip) {
      if(tip === 'portfolio') {
        $scope.portfolioTip = !$scope.portfolioTip;
      }
      if(tip === 'contact') {
        $scope.contactTip = !$scope.contactTip;
      }
      if(tip === 'about') {
        $scope.aboutTip = !$scope.aboutTip;
      }
    }

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
      // $scope.meta = !$scope.meta;
      $scope.grow = false;
    }

    $scope.slide = function (dir) {
      if(dir === 'top') {
        $scope.hideResume = true;
        $scope.categoryFilter = '';
      } else {
        $scope.hideResume = false;
      }
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

      submitContactForm.sendMail(data);
    }

  });