angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope,$stateParams,mainSrv){


    var cityImage = ""
    $scope.locationData = mainSrv.travelInfo
    for (var i = 0; i < $scope.locationData.length; i++) {
        if ($stateParams.id == $scope.locationData[i].id) {
            $scope.cityName = $scope.locationData[i].city;
            cityImage = $scope.locationData[i].image;

        }
    }

    $scope.bookedStyle = {
        "background": "url(" + cityImage + ") no-repeat",
        "background-size": "cover"
    }
    console.log (cityImage)
})
