var module = angular.module("clockApp", []);
module.controller("TimeCtrl", getCurrentTime);

function getCurrentTime($scope) {
    var currentTime = new Date();
    $scope.timeString = currentTime.toTimeString();

    $scope.updateTime = function () {
        var currentTime = new Date();
        $scope.timeString = currentTime.toTimeString();
    }
}
