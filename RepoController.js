(() => {
  const app = angular.module('githubViewer');

  const RepoController = function($scope, $location, $routeParams, github) {
    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    github
      .getRepo($scope.username, $scope.reponame)
      .then(repo => {
        $scope.repo = repo;

        github
          .getRepoContributors($scope.repo)
          .then(contributors => {
            $scope.contributors = contributors;
          });
      });
  };

  app.controller("RepoController", RepoController);
})();
