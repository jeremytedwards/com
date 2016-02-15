function Card(data) {
    this.title = data.title;
    this.category = data.category;
    this.author = data.author;
    this.authorUrl = data.authorUrl;
    this.publishedOn = data.publishedOn;
    this.body = data.body;
}

Card.all = [];

Card.prototype.toHtml = function() {
    var template = Handlebars.compile($('#card-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
};

Card.loadAll = function(cardData) {
    console.log(cardData);

    cardData.sort(function(a,b) {
        return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    cardData.forEach(function(ele) {
        Card.all.push(new Card(ele));
    });
};

Card.buildDeck = function() {
    // If available load data from localStorage
    // otherwise parse from .ajax call
    if (localStorage.rawData) {
        $.ajax({
            type: 'HEAD',
            dataType: 'text',
            contentType: "application/json",
            url: 'data/deck.json',
            success: function(data, message, xhr) {
                console.log(xhr);

                var eTag = xhr.getResponseHeader('eTag');
                if (!localStorage.eTag || eTag != localStorage.eTag) {
                    console.log('Updating localStorage');
                    localStorage.eTag = eTag;
                } else {
                    console.log('Using localStorage');
                    Card.loadAll(JSON.parse(localStorage.rawData));
                }
            }
        });

        Card.loadAll(JSON.parse(localStorage.rawData));
        buildDeck.initIndexPage();
    } else {
        $.ajax({
            type: 'GET',
            dataType: 'text',
            contentType: "application/json",
            url: 'data/deck.json',
            success: function (rawJSON) {
                console.log('Initialize rawJSON to localStorage');
                console.log(rawJSON);

                localStorage.rawData = JSON.stringify(rawJSON);
                Card.loadAll(rawJSON);
                buildDeck.initIndexPage();
            }
        });

        <!-- alternate ajax call -->
        //$.getJSON('data/hackeripsum.json').done(function(rawJSON){
        //    console.log('Initial rawJSON to localStorage');
        //    console.log(rawJSON);
        //
        //    localStorage.rawData = JSON.stringify(rawJSON);
        //    Card.loadAll(rawJSON);
        //    buildDeck.initIndexPage();
        //});
    }

};

