var buildDeck = {};

buildDeck.populateFilters = function() {
    $('card').each(function() {
        if (!$(this).hasClass('card-template')) {
            var val = $(this).find('address a').text();
            var optionTag = '<option value="' + val + '">' + val + '</option>';
            $('#author-filter').append(optionTag);

            val = $(this).attr('data-category');
            optionTag = '<option value="' + val + '">' + val + '</option>';
            if ($('#category-filter option[value="' + val + '"]').length === 0) {
                $('#category-filter').append(optionTag);
            }
        }
    });
};

buildDeck.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
        if ($(this).val()) {
            $('card').hide();
            $('card[data-category="'+ $(this).val() + '"]').fadeIn();
        } else {
            $('card[data-category]').show();
        }
        $('#author-filter').val('');
    });
};


// TODO: build navigation handling


buildDeck.initIndexPage = function() {
    console.log("initIndexPage Called");

    Card.all.forEach(function(a){
        $('#deck-template').append(a.toHtml());
    });

    buildDeck.populateFilters();
    buildDeck.handleCategoryFilter();
    //buildDeck.setTeasers();
    //buildDeck.handleTopNav();
};
