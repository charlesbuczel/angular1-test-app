(function() {

  var app = angular.module('githubViewer', []);

  var MainController = function($scope, $interval, $http, $log, $location, $anchorScroll, github) {
    $scope.search = function() {
      $log.info("Searching for " + $scope.username);
      github
      .getUser($scope.username)
      .then((user) => {
        $scope.user = user;

        github
        .getRepos($scope.user)
        .then(repos => {
          $scope.user.repos = repos;
          $location.hash('userdetails');
          $anchorScroll();
        })
      })

      if (countDownInterval) {
        $interval.cancel(countDownInterval);
        $scope.countdown = null;
      }
    }

    $scope.username = "angular";
    $scope.title = "Github Viewer";

    $scope.repoLimitDisplay = 10;
    $scope.repoSortOrder = '+name';

    $scope.countdown = 5;
    var countDownInterval = $interval(function () {
      if (--$scope.countdown < 1) {
        $scope.search();
      }
    }, 1000, $scope.countdown);
  };

  app.controller("MainController", MainController);
}());
