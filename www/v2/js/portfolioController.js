(function(module) {
    var portfolioController = {};

    portfolioController.index = function() {
        Card.buildDeck();

        $('main > section').hide();
        $('#deck-template').show();
    };

    module.portfolioController = portfolioController;
})(window);