'use strict';

/**
 * @ngdoc function
 * @name fitbugTestApp.controller:MapctrlCtrl
 * @description
 * # MapctrlCtrl
 * Controller of the fitbugTestApp
 */
angular.module('fitbugTestApp')
  .controller('MapctrlCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.mapOptions = {
            center: new google.maps.LatLng(35.784, -78.670),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

  }]);
