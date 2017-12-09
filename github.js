(function() {
  var github = function($http) {
    function getUser(username) {
      return $http
        .get('https://api.github.com/users/' + username)
        .then(response => response.data);
    }

    function getRepos(user) {
      return $http
        .get(user.repos_url)
        .then(response => response.data);
    }

    return {
      getUser,
      getRepos
    }
  };

  var module = angular.module("githubViewer");
  module.factory('github', github)
}());
