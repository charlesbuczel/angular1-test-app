(() => {
  function github($http) {
    const getUser = username => $http.get('https://api.github.com/users/' + username).then(response => response.data);

    const getRepos = user => $http.get(user.repos_url).then(response => response.data);

    return {
      getUser, getRepos
    };
  }

  const module = angular.module("githubViewer");
  module.factory('github', github);
})();
