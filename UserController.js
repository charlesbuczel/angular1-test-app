(() => {
  const app = angular.module('githubViewer');

  const UserController = function($scope, github, $routeParams) {
    const onError = reason => {
      $scope.error = 'Could not fetch the data';
    }

    const onReposComplete = repos => {
      $scope.repos = repos;
    }

    const onUserComplete = user => {
      $scope.user = user;

      github.getRepos($scope.user).then(onReposComplete, onError);
    }


    $scope.username = $routeParams.username;
    $scope.repoLimitDisplay = 10;
    $scope.repoSortOrder = '+name';

    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);
})();
