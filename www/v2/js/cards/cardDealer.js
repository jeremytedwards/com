(function(module) {

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
        console.log(typeof (cardData));

        cardData.sort(function(a,b) {
            return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
        });

        Card.all = cardData.map(function(ele) {
            return new Card(ele);
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

            buildDeck.initIndexPage();   //next();
        } else {
            console.log("Fetching deck");

            $.ajax({
                type: 'GET',
                dataType: 'text',
                contentType: "application/json",
                url: 'data/deck.json',
                success: function (rawJSON) {
                    console.log('Initialize rawJSON to localStorage');
                    console.log("rawJSON: " + rawJSON);

                    localStorage.rawData = rawJSON;

                    Card.loadAll(JSON.parse(rawJSON));

                    buildDeck.initIndexPage();  //next();
                }
            });
        }

        var numWords = function(a) {
            return a.map(function(article) {
                    return article.body.match(/\b\w+/g).length;
                })
                .reduce(function(a, b) {
                    return a + b;
                });
        };

        Card.numWordsAll = function() {
            return numWords(Card.all);
        };

        // Produce an array of unique author names.
        Card.allAuthors = function() {
            return Card.all.map(function(card) {

                //  console.log(article.author);
                    return card.author;
                })
                .reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                },[]);
        };

        Card.numWordsByAuthor = function() {
            return Card.allAuthors().map(function(author) {         // get unique set authors
                return {
                    name: author,
                    count: numWords(Card.all.filter(function(ele) {
                        return ele.author == author;
                    }))};
            });
        };
    };

    module.Card = Card;
}(window));