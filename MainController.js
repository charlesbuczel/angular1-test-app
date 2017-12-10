(() => {
  const app = angular.module('githubViewer');

  const MainController = function($scope, $interval, $location) {
    $scope.username = "angular";
    $scope.countdown = 5;
    let countdownInterval = $interval(function () {
      if (--$scope.countdown < 1) {
        //$scope.search();
      }
    }, 1000, $scope.countdown);

    $scope.search = () => {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path('/user/' + $scope.username);
    }
  };

  app.controller("MainController", MainController);
})();
