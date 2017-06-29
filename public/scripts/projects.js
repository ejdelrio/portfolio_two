'use strict';
var app = app || {};


(function(module) {

  var allRepos = [];
  var myRepos;

  function Repo(repoObject) {
    Object.keys(repoObject).forEach(key => this[key] = repoObject[key]);
    allRepos.push(this);

  }

  Repo.prototype.render = function() {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  function fetchJSON() {
    $.get('/github/user/repos')
    .then(function(data) {
      console.log('Repos: ', data);
      myRepos = dataCheck(data);
      pushData(myRepos);
      localStorage.myRepos = JSON.stringify(myRepos);
    },
    function(err) {
      console.error(err);
      myRepos = JSON.parse(localStorage.myRepos);
      pushData(myRepos);
    });
  }

  function pushData(source) {
    source.data.forEach(ind => new Repo(ind));
    allRepos.reduce((inc,ind) => $($('#projects').children('section').append(ind.render())), 0);
  }

  function dataCheck(data) {
    if(localStorage.myRepos) {
      return JSON.parse(localStorage.myRepos);
    } else {
      return data;
    }
  }

  fetchJSON();
})(app);
