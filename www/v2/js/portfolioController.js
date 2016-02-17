(function(module) {
    var portfolioController = {};

    Card.buildDeck();

    portfolioController.index = function() {
        Card.loadAll(buildDeck.initIndexPage);

        $('main > section').hide();
        $('#deck-template').show();
    };

    module.portfolioController = portfolioController;
})(window);