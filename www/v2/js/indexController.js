(function(module) {
    var indexController = {};

    indexController.index = function() {
        $('main > section').hide();
        $('#intro').show();
    };

    module.indexController = indexController;
})(window);