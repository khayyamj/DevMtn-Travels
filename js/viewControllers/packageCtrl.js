angular.module('devmtnTravel')
.controller('packageCtrl', function($scope, mainSrv) {

    $scope.locationData = mainSrv.travelInfo;

})
