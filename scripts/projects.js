'use strict';

var allRepos = [];

function Repo(repoObject) {
    Object.keys(repoObject).forEach(key => this[key] = repoObject[key])
    allRepos.push(this);

}

Repo.prototype.render = function() {
    var template = Handlebars.compile($('#project-template').text())
    return template(this);
};

var myRepos;

$.getJSON('https://api.github.com/users/ejdelrio/repos?callback=?').then(function(data){
        myRepos = data;
        myRepos.data.forEach(ind => new Repo(ind));
        allRepos.forEach(ind => $($('#projects').children('section').append(ind.render())));},
        err => console.error(err));


