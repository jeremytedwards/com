(function(module) {
    var githubController = {};

    githubController.index = function() {
        githubRepos.requestRepos(githubView.index);

        $('main > section').hide();
        $('#github').show();
    };

    module.githubController = githubController;
})(window);