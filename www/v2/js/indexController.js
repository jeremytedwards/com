(function(module) {
    var indexController = {};

    // DONE: Create the `articles` table when the controller first loads, with the code that used to be in index.html:
    Card.createTable();


    // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
    // code that used to be in index.html.
    // Also be sure to hide all the main section elements, and reveal the #articles section:
    indexController.index = function() {
        Card.loadAll(buildDeck.initIndexPage);

        $('main > section').hide();
        $('#articles').show();
    };

    module.indexController = indexController;
})(window);