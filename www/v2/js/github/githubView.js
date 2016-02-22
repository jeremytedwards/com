(function(module) {
    var githubView = {};

    var ui = function() {
        var $github = $('#github');

        $github.find('ul').empty();
        $github.show().siblings().hide();
    };

    var render = function(repo) {
        return $('<li>')
            .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
    };

    githubView.index = function() {
        ui();

        $('#github ul').append(
            githubRepos.with('description').map(render)
        );
    };

    module.githubView = githubView;
})(window);
