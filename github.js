(() => {
  function github($http) {
    const userUrl = 'https://api.github.com/users/';
    const reposUrl = 'https://api.github.com/repos/';
    const returnResponseData = response => response.data;

    const getUser = username => $http.get(userUrl + username).then(returnResponseData);

    const getRepos = user => $http.get(user.repos_url).then(returnResponseData);

    const getRepo = (username, reponame) => $http.get(reposUrl + username + '/' + reponame).then(returnResponseData);

    const getRepoContributors = repo => $http.get(repo.contributors_url).then(returnResponseData);

    return {
      getUser,
      getRepos,
      getRepo,
      getRepoContributors
    };
  }

  const module = angular.module("githubViewer");
  module.factory('github', github);
})();
