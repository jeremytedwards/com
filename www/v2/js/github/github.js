(function(module) {
    var githubRepos = {};

    githubRepos.all = [];

    githubRepos.requestRepos = function(callback) {
    $.get('/github/users/jeremytedwards/repos?per_page=100&sort=updated')
        .done(function(data, message, xhr) {
            console.log('requestRepos done:' + message);
            githubRepos.all = data;
        })
        .done(callback);
    };

    githubRepos.with = function(attr) {
        return githubRepos.all.filter(function(repo) {
            return repo[attr];
        });
    };

    module.githubRepos = githubRepos;
})(window);
