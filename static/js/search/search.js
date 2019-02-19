var lunrIndex, $results, pagesIndex;

function initSearchIndex() {
    $.getJSON('https://my.fesco.com/help/js/search/index.json')
        .done(function(documents) {
            pagesIndex = documents;
            lunrIndex = lunr(function() {
                this.use(lunr.multiLanguage('en', 'ru'))
                this.field('title', {boost: 10});
                this.field('categories', {boost: 10});
                this.field('tags', {boost: 10});
                this.field('content');
                this.ref('href');
            });
            // Feed lunr with each file and let lunr actually index them
            pagesIndex.forEach(function(page) {
                lunrIndex.add(page);
            });
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            console.error('Error getting index file:', err);
        });
}

function initUI() {
    $results = $('#search-result');
    $('#searchbox').keyup(function() {
        $results.hide()
        $results.empty();
        // only search when query has 2 characters or more
        var query = $(this).val();
        if (query.length < 2) {
            return;
        }
        var results = searchSite(query);
        renderResults(results);
    });
}

function searchSite(query) {
    return lunrIndex.search(query).map(function(result) {
        return pagesIndex.filter(function(page) {
            return page.href === result.ref;
        })[0];
    });
    // return lunrIndex.search(function(q) {
    //     // look for an exact match and give that a massive positive boost
    //     q.term(query_string, { usePipeline: true, boost: 100 });
    //     // prefix matches should not use stemming, and lower positive boost
    //     q.term(query_string, { usePipeline: false, boost: 10, wildcard: lunr.Query.wildcard.TRAILING });
    // }).map(function(result) {
    //     return pagesIndex.filter(function(page) {
    //         return page.href === result.ref;
    //     })[0];
    // });
}

function renderResults(results) {
    if (!results.length) {
        return;
    }
    results.slice(0, 10).forEach(function(hit) {
        var $result = $('<li style="list-style: none">');
        $result.append($('<a>', {
            href: hit.href,
            text: hit.title
        }));
        $result.append($('<p/>', { text: hit.content.slice(0, 100) + '...' }));
        $result.css('color','black');
        $results.append($result);
        $results.show()
    });
}

initSearchIndex();

$(document).ready(function() {
    initUI();
});
